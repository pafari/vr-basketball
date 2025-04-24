import csv
import json
import math
import random
import re

def parse_distance(description):
    """Extract numeric shot distance from description using regex."""
    match = re.search(r"(\d+)-foot", description)
    if match:
        return float(match.group(1))
    return None

def generate_xy(feet_from_hoop):
    """
    Convert radial shot distance into (x_ft, y_ft) coordinates.
    Assume hoop is at (0, -47).
    """
    angle = random.uniform(-math.pi / 2, math.pi / 2)  # Front half-circle
    x = feet_from_hoop * math.cos(angle)
    y = -47 + feet_from_hoop * math.sin(angle)
    return round(x, 2), round(y, 2)

input_csv = "Carmelo_Anthony_shots.csv"
output_json = "melo_scaled_manual.json"

shots = []
with open(input_csv, "r") as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        description = row.get("description", "")
        feet = parse_distance(description)
        if feet is None:
            continue
        x_ft, y_ft = generate_xy(feet)
        shots.append({
            "description": description,
            "result": row.get("result", ""),
            "x_ft": x_ft,
            "y_ft": y_ft
        })

with open(output_json, "w") as jsonfile:
    json.dump(shots, jsonfile, indent=2)

print(f"✅ Converted {len(shots)} shots to {output_json}")