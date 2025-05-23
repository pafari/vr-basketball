import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { XRButton } from "three/examples/jsm/webxr/XRButton.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import TWEEN from "@tweenjs/tween.js";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";

export default function BasketballCourtScene() {
  const mountRef = useRef(null);

  const [stats, setStats] = useState({
    made: 0,
    missed: 0,
    fgPercent: "0.0",
  });

  useEffect(() => {
    const scene = new THREE.Scene();
    const shotsGroup = new THREE.Group();
    scene.add(shotsGroup);
    scene.background = new THREE.Color(0x1a1a1a);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 20, 35);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.xr.enabled = true;

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
      if ("xr" in navigator) {
        document.body.appendChild(XRButton.createButton(renderer));
      }
    }

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Reuse your original logic for court, backboard, rim, net, zone labels, and court lines (not shown here to conserve space)
    // Court with wood color
    const courtGeometry = new THREE.PlaneGeometry(50, 94);
    const courtMaterial = new THREE.MeshStandardMaterial({
      color: 0x8b4513,
      roughness: 0.7,
      metalness: 0.1,
    });
    const court = new THREE.Mesh(courtGeometry, courtMaterial);
    court.rotation.x = -Math.PI / 2;
    court.receiveShadow = true;
    scene.add(court);

    // Hoop System
    const backboard = new THREE.Mesh(
      new THREE.BoxGeometry(6, 4, 0.2),
      new THREE.MeshStandardMaterial({ color: 0xffffff })
    );
    backboard.position.set(0, 10, -47);
    backboard.castShadow = true;
    scene.add(backboard);

    const rim = new THREE.Mesh(
      new THREE.TorusGeometry(0.75, 0.08, 16, 100),
      new THREE.MeshStandardMaterial({ color: 0xff4500 })
    );
    rim.rotation.x = Math.PI / 2;
    rim.position.set(0, 9.8, -46.7);
    rim.castShadow = true;
    scene.add(rim);

    const createZoneOverlay = (width, height, position, color) => {
      const geometry = new THREE.PlaneGeometry(width, height);
      const material = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.25,
        depthWrite: false, // helps prevent z-fighting
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.rotation.x = -Math.PI / 2;
      mesh.position.copy(position);
      scene.add(mesh);
    };

    // Net
    const netGeometry = new THREE.CylinderGeometry(0.7, 0.7, 1.5, 12);
    const netMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
    });
    const net = new THREE.Mesh(netGeometry, netMaterial);
    net.position.set(0, 9.1, -46.7);
    scene.add(net);

    const loader = new FontLoader();
    loader.load("/fonts/helvetiker_regular.typeface.json", (font) => {
      // Paint zone (16 ft wide × 19 ft long)
      createZoneOverlay(16, 19, new THREE.Vector3(0, 0.11, -37.5), 0x00b8e6); // light blue

      // Midrange zone (entire area between paint and 3PT arc)
      createZoneOverlay(40, 28, new THREE.Vector3(0, 0.11, -10), 0xff8c00); // orange-ish

      // 3PT zone (wide zone past arc)
      createZoneOverlay(50, 20, new THREE.Vector3(0, 0.11, 24.5), 0x800080); // purple
    });

    // Court Markings
    const courtLinesMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      linewidth: 2,
    });

    // 1. Boundary Lines
    const boundaryPoints = [
      new THREE.Vector3(-25, 0.1, -47), // Left baseline
      new THREE.Vector3(25, 0.1, -47), // Right baseline
      new THREE.Vector3(25, 0.1, 47), // Right sideline
      new THREE.Vector3(-25, 0.1, 47), // Left sideline
      new THREE.Vector3(-25, 0.1, -47), // Close the shape
    ];
    scene.add(
      new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(boundaryPoints),
        courtLinesMaterial
      )
    );

    // 2. Three-Point Line
    const threePointArc = new THREE.BufferGeometry();
    const arcPoints = [];
    const threePointRadius = 23.75; // NBA regulation 3pt radius
    const baselineDistance = 4.0; // Distance from baseline to arc center

    // Create arc from 19.5° to 160.5° (140° arc)
    for (let angle = 0.12; angle <= 0.88; angle += 0.01) {
      const theta = angle * Math.PI; // Convert to radians
      arcPoints.push(
        new THREE.Vector3(
          Math.cos(theta) * threePointRadius,
          0.1,
          Math.sin(theta) * threePointRadius - baselineDistance
        )
      );
    }
    threePointArc.setFromPoints(arcPoints);
    scene.add(new THREE.Line(threePointArc, courtLinesMaterial));

    // 3. Key Area (Paint)
    const keyGeometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-8, 0.1, -47), // Left baseline
      new THREE.Vector3(-8, 0.1, -28), // Left free throw line
      new THREE.Vector3(8, 0.1, -28), // Right free throw line
      new THREE.Vector3(8, 0.1, -47), // Right baseline
      new THREE.Vector3(-8, 0.1, -47), // Close the shape
    ]);
    scene.add(new THREE.Line(keyGeometry, courtLinesMaterial));

    // 4. Free Throw Circle
    const ftCircleGeometry = new THREE.BufferGeometry();
    const ftPoints = [];
    for (let i = 0; i <= Math.PI * 2; i += 0.05) {
      ftPoints.push(
        new THREE.Vector3(
          Math.cos(i) * 6, // 6ft radius
          0.1,
          -28 + Math.sin(i) * 6 // Centered at free throw line
        )
      );
    }
    ftCircleGeometry.setFromPoints(ftPoints);
    scene.add(new THREE.Line(ftCircleGeometry, courtLinesMaterial));

    // 5. Backboard Alignment Mark
    const backboardLine = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-3, 0.1, -47),
      new THREE.Vector3(3, 0.1, -47),
    ]);
    scene.add(new THREE.Line(backboardLine, courtLinesMaterial));

    // 6. Lane Lines (Block markers)
    const laneMarkers = [
      [-7, -34],
      [-7, -40],
      [7, -34],
      [7, -40],
    ].forEach(([x, z]) => {
      const marker = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(x, 0.1, z),
        new THREE.Vector3(x, 0.1, z + 1),
      ]);
      scene.add(new THREE.Line(marker, courtLinesMaterial));
    });

    // State for queued shots
    let shotIndex = 0;
    let shots = [];
    let isAnimating = false;

    // Helper function to animate each shot one at a time
    function playShot(shot, onComplete) {
      const ball = new THREE.Mesh(
        new THREE.SphereGeometry(0.3, 8, 8), // Lower poly for performance
        new THREE.MeshStandardMaterial({ color: 0xffa500 })
      );
      ball.castShadow = true;
      const startPos = new THREE.Vector3(shot.x_ft, 1, shot.y_ft);
      ball.position.copy(startPos);
      shotsGroup.add(ball);

      const isMade = (shot.result || "").toLowerCase().includes("made");
      const trailColor = isMade ? 0x00ff00 : 0xff0000;

      const targetPos = new THREE.Vector3();
      const controlPos = new THREE.Vector3();

      if (isMade) {
        targetPos.set(0, 9.8, -46.7);
        controlPos.set(
          (startPos.x + targetPos.x) / 2,
          Math.max(20, startPos.y + 15),
          (startPos.z + targetPos.z) / 2
        );
      } else {
        const missType = Math.random();
        if (missType < 0.7) {
          targetPos.set(
            0 + (Math.random() - 0.5) * 1.5,
            9.5,
            -46.7 + (Math.random() - 0.5) * 1.5
          );
          controlPos.set(
            (startPos.x + targetPos.x) / 2,
            12,
            (startPos.z + targetPos.z) / 2
          );
        } else {
          targetPos.set(
            startPos.x + (Math.random() - 0.5) * 10,
            1,
            startPos.z - 15
          );
          controlPos.set(
            (startPos.x + targetPos.x) / 2,
            8,
            (startPos.z + targetPos.z) / 2
          );
        }
      }

      const trajectory = new THREE.QuadraticBezierCurve3(
        startPos,
        controlPos,
        targetPos
      );
      const trailGeometry = new THREE.BufferGeometry().setFromPoints(
        trajectory.getPoints(50)
      );
      const trailMaterial = new THREE.LineBasicMaterial({
        color: trailColor,
        linewidth: 2,
      });
      const trail = new THREE.Line(trailGeometry, trailMaterial);
      shotsGroup.add(trail);

      const duration = isMade ? 120 : 100;
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const t = Math.min(elapsed / (duration * 16), 1);
        const point = trajectory.getPoint(t);
        const verticalOffset = Math.sin(t * Math.PI) * (isMade ? 5 : 3);
        ball.position.set(point.x, point.y + verticalOffset, point.z);
        ball.rotation.x = t * Math.PI * 2;
        ball.rotation.z = t * Math.PI * 1.5;

        if (t < 1) {
          requestAnimationFrame(animate);
        } else {
          setTimeout(
            () => {
              shotsGroup.remove(ball);
              shotsGroup.remove(trail);
              ball.geometry.dispose();
              ball.material.dispose();
              trail.geometry.dispose();
              trail.material.dispose();
              onComplete();
            },
            isMade ? 1000 : 500
          );
        }
      };

      animate();
    }

    function animateNextShot() {
      if (shotIndex >= shots.length || isAnimating) return;
      isAnimating = true;
      playShot(shots[shotIndex++], () => {
        isAnimating = false;
      });
    }

    async function loadShots() {
      try {
        const response = await fetch("tatum_game7_webxr_coords.json");
        if (!response.ok) throw new Error("Failed to load shot data");
        shots = await response.json();

        let madeCount = 0;
        let missedCount = 0;

        for (const shot of shots) {
          if ((shot.result || "").toLowerCase().includes("made")) {
            madeCount++;
          } else {
            missedCount++;
          }
        }

        setStats({
          made: madeCount,
          missed: missedCount,
          fgPercent: ((madeCount / (madeCount + missedCount)) * 100).toFixed(1),
        });
      } catch (error) {
        console.error("Error loading shots:", error);
      }
    }

    loadShots();

    renderer.setAnimationLoop(() => {
      TWEEN.update();
      controls.update();
      renderer.render(scene, camera);

      if (!isAnimating) {
        animateNextShot();
      }
    });

    return () => {
      if (mountRef.current) {
        renderer.dispose();
        scene.clear();
        mountRef.current.removeChild(renderer.domElement);
        TWEEN.removeAll();
      }
    };
  }, []);

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <div ref={mountRef} style={{ width: "100%", height: "100%" }} />

      {/* Legend UI */}
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          color: "white",
          padding: "10px 15px",
          borderRadius: "8px",
          fontSize: "14px",
          lineHeight: "1.6",
          zIndex: 1000,
        }}
      >
        <strong>Legend</strong>
        <br />
        <span style={{ color: "#00ff00" }}>●</span> Made Shot
        <br />
        <span style={{ color: "#ff0000" }}>●</span> Missed Shot
        <br />
        <span style={{ color: "#ffa500" }}>●</span> Shot Origin
      </div>

      {/*  STATS UI BOX */}
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          color: "white",
          padding: "10px 15px",
          borderRadius: "8px",
          fontSize: "14px",
          lineHeight: "1.6",
          zIndex: 1000,
        }}
      >
        <strong>Shot Stats</strong>
        <br />
        🟢 Made: {stats.made}
        <br />
        🔴 Missed: {stats.missed}
        <br />
        🎯 FG%: {stats.fgPercent}%
      </div>
    </div>
  );
}
