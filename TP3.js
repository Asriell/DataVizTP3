<!DOCTYPE html>
<head>
  <meta charset="utf-8" />
  <script src="https://d3js.org/d3.v7.min.js"></script>
  <style>
    body {
      margin: 0;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  </style>
</head>

<body>
  <script>
    var width = 700,
      height = 580;

    var svg = d3
      .select("body")
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    // On rajoute un groupe englobant toute la visualisation pour plus tard
    var g = svg.append("g");

    var projection = d3
      .geoAlbersUsa()
      .translate([width / 2, height / 2])
      .scale([500]);

    var path = d3.geoPath().projection(projection);

    d3.json("us-states.json").then(function (jsondata) {
      g.selectAll("path")
        .data(jsondata.features)
        .join("path")
        .attr("fill", "#ccc")
        .attr("d", path);
    });
  </script>
</body>
