window.onload = function() {
    Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1YjY2OWE1Yy0wYjc1LTQ1YTQtODMxZi1mZTQwOWQwOGEzZWYiLCJpZCI6MTUwODQ0LCJpYXQiOjE2ODgzNDY0MTh9.dEoQJsxp89FmreUbbxZiSjduEt9OKWZJC1jUJGCaI64';
    
    // Initialize viewer with improved settings
    const viewer = new Cesium.Viewer('cesiumContainer', {
        imageryProvider: new Cesium.createWorldImagery({
            style: Cesium.IonWorldImageryStyle.AERIAL
        }),
        baseLayerPicker: false,
        requestRenderMode: true,
        creditContainer: document.createElement('div'),
        animation: false,
        geocoder: false,
        timeline: false,
        sceneModePicker: false,
        navigationHelpButton: true,
        homeButton: false,
        infoBox: false,
        selectionIndicator: false,
        terrainProvider: Cesium.createWorldTerrain()
    });

    // Camera controls
    viewer.scene.screenSpaceCameraController.enableRotate = true;
    viewer.scene.screenSpaceCameraController.enableTranslate = true;
    viewer.scene.screenSpaceCameraController.enableZoom = true;
    viewer.scene.screenSpaceCameraController.enableTilt = true;
    viewer.scene.screenSpaceCameraController.enableLook = true;

    viewer.scene.screenSpaceCameraController.rotateEventTypes = [
        Cesium.CameraEventType.LEFT_DRAG,
        Cesium.CameraEventType.RIGHT_DRAG,
        Cesium.CameraEventType.MIDDLE_DRAG
    ];

    // Load Google 3D Tiles
    const tileset = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
        url: "https://tile.googleapis.com/v1/3dtiles/root.json?key= AIzaSyA8C9_h4ZqzKWDRJNNG3677SYaZgZ9XSWg",
        showCreditsOnScreen: true,
    }));

    viewer.scene.globe.enableLighting = true;
    viewer.scene.globe.show = false;

    // Initial camera position
    viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(-94.998571, 29.742848, 5000),
        duration: 5,
        complete: function() {
            setTimeout(function() {
                viewer.camera.flyTo({
                    destination: Cesium.Cartesian3.fromDegrees(-94.9960463696682, 29.739476474124718, 106.30991509431206),
                    orientation: {
                        heading: 5.475943510971197,
                        pitch: -0.2776868961099246,
                        roll: 0.000005434500673473508
                    },
                    duration: 10
                });
            }, 500);
        }
    });

    // Worker paths - Larger loops with more waypoints for smooth movement
    const paths = [
        // Worker 1 - Red - Large loop crossing hazard zone
        [
            { longitude: -94.999029, latitude: 29.743500 },
            { longitude: -94.998800, latitude: 29.743300 },
            { longitude: -94.998600, latitude: 29.743000 },
            { longitude: -94.998400, latitude: 29.742700 },
            { longitude: -94.998200, latitude: 29.742400 },
            { longitude: -94.998000, latitude: 29.742100 },
            { longitude: -94.998200, latitude: 29.741800 },
            { longitude: -94.998600, latitude: 29.741500 },
            { longitude: -94.999000, latitude: 29.741200 },
            { longitude: -94.999400, latitude: 29.740900 },
            { longitude: -94.999600, latitude: 29.740600 }, // In hazard zone
            { longitude: -94.999800, latitude: 29.740300 }, // In hazard zone
            { longitude: -95.000000, latitude: 29.740600 }, // In hazard zone
            { longitude: -95.000200, latitude: 29.740900 },
            { longitude: -95.000400, latitude: 29.741200 },
            { longitude: -95.000600, latitude: 29.741500 },
            { longitude: -95.000400, latitude: 29.741800 },
            { longitude: -95.000200, latitude: 29.742100 },
            { longitude: -95.000000, latitude: 29.742400 },
            { longitude: -94.999800, latitude: 29.742700 },
            { longitude: -94.999600, latitude: 29.743000 },
            { longitude: -94.999400, latitude: 29.743300 },
            { longitude: -94.999200, latitude: 29.743400 },
        ],
        // Worker 2 - Green - Large loop crossing hazard zone
        [
            { longitude: -94.997800, latitude: 29.743000 },
            { longitude: -94.997600, latitude: 29.742800 },
            { longitude: -94.997400, latitude: 29.742600 },
            { longitude: -94.997200, latitude: 29.742400 },
            { longitude: -94.997000, latitude: 29.742200 },
            { longitude: -94.996800, latitude: 29.742000 },
            { longitude: -94.997000, latitude: 29.741800 },
            { longitude: -94.997200, latitude: 29.741600 },
            { longitude: -94.997400, latitude: 29.741400 },
            { longitude: -94.997600, latitude: 29.741200 },
            { longitude: -94.997800, latitude: 29.741000 },
            { longitude: -94.998000, latitude: 29.740800 },
            { longitude: -94.998200, latitude: 29.740600 },
            { longitude: -94.998400, latitude: 29.740400 }, // Approaching hazard
            { longitude: -94.998381, latitude: 29.740377 }, // In hazard zone
            { longitude: -94.998600, latitude: 29.740200 }, // In hazard zone
            { longitude: -94.998800, latitude: 29.740000 }, // In hazard zone
            { longitude: -94.999000, latitude: 29.740200 },
            { longitude: -94.999200, latitude: 29.740400 },
            { longitude: -94.999000, latitude: 29.740600 },
            { longitude: -94.998800, latitude: 29.740800 },
            { longitude: -94.998600, latitude: 29.741000 },
            { longitude: -94.998400, latitude: 29.741200 },
            { longitude: -94.998200, latitude: 29.741400 },
            { longitude: -94.998000, latitude: 29.741600 },
            { longitude: -94.997800, latitude: 29.741800 },
            { longitude: -94.997600, latitude: 29.742000 },
            { longitude: -94.997400, latitude: 29.742200 },
            { longitude: -94.997600, latitude: 29.742400 },
            { longitude: -94.997800, latitude: 29.742600 },
            { longitude: -94.998000, latitude: 29.742800 },
        ],
        // Worker 3 - Blue - Large loop crossing hazard zone
        [
            { longitude: -94.999400, latitude: 29.743800 },
            { longitude: -94.999200, latitude: 29.743600 },
            { longitude: -94.999000, latitude: 29.743400 },
            { longitude: -94.998800, latitude: 29.743200 },
            { longitude: -94.998600, latitude: 29.743000 },
            { longitude: -94.998400, latitude: 29.742800 },
            { longitude: -94.998200, latitude: 29.742600 },
            { longitude: -94.998000, latitude: 29.742400 },
            { longitude: -94.997800, latitude: 29.742200 },
            { longitude: -94.997600, latitude: 29.742000 },
            { longitude: -94.997400, latitude: 29.741800 },
            { longitude: -94.997600, latitude: 29.741600 },
            { longitude: -94.997800, latitude: 29.741400 },
            { longitude: -94.998000, latitude: 29.741200 },
            { longitude: -94.998200, latitude: 29.741000 },
            { longitude: -94.998400, latitude: 29.740800 },
            { longitude: -94.998600, latitude: 29.740600 },
            { longitude: -94.998800, latitude: 29.740400 },
            { longitude: -94.999000, latitude: 29.740200 },
            { longitude: -94.999200, latitude: 29.740000 },
            { longitude: -94.999400, latitude: 29.739800 }, // In hazard zone
            { longitude: -94.999600, latitude: 29.739891 }, // In hazard zone
            { longitude: -94.999800, latitude: 29.740000 }, // In hazard zone
            { longitude: -95.000000, latitude: 29.740200 }, // In hazard zone
            { longitude: -95.000200, latitude: 29.740400 }, // In hazard zone
            { longitude: -95.000400, latitude: 29.740600 },
            { longitude: -95.000600, latitude: 29.740800 },
            { longitude: -95.000800, latitude: 29.741000 },
            { longitude: -95.001000, latitude: 29.741200 },
            { longitude: -95.000800, latitude: 29.741400 },
            { longitude: -95.000600, latitude: 29.741600 },
            { longitude: -95.000400, latitude: 29.741800 },
            { longitude: -95.000200, latitude: 29.742000 },
            { longitude: -95.000000, latitude: 29.742200 },
            { longitude: -94.999800, latitude: 29.742400 },
            { longitude: -94.999600, latitude: 29.742600 },
            { longitude: -94.999800, latitude: 29.742800 },
            { longitude: -95.000000, latitude: 29.743000 },
            { longitude: -95.000200, latitude: 29.743200 },
            { longitude: -95.000000, latitude: 29.743400 },
            { longitude: -94.999800, latitude: 29.743600 },
            { longitude: -94.999600, latitude: 29.743800 },
        ],
        // Worker 4 - Yellow - Large loop crossing hazard zone
        [
            { longitude: -94.996800, latitude: 29.743800 },
            { longitude: -94.997000, latitude: 29.743600 },
            { longitude: -94.997200, latitude: 29.743400 },
            { longitude: -94.997400, latitude: 29.743200 },
            { longitude: -94.997600, latitude: 29.743000 },
            { longitude: -94.997800, latitude: 29.742800 },
            { longitude: -94.998000, latitude: 29.742600 },
            { longitude: -94.998200, latitude: 29.742400 },
            { longitude: -94.998400, latitude: 29.742200 },
            { longitude: -94.998600, latitude: 29.742000 },
            { longitude: -94.998800, latitude: 29.741800 },
            { longitude: -94.999000, latitude: 29.741600 },
            { longitude: -94.999200, latitude: 29.741400 },
            { longitude: -94.999400, latitude: 29.741200 },
            { longitude: -94.999600, latitude: 29.741000 },
            { longitude: -94.999800, latitude: 29.740800 },
            { longitude: -95.000000, latitude: 29.740600 }, // In hazard zone
            { longitude: -95.000200, latitude: 29.740400 }, // In hazard zone
            { longitude: -95.000400, latitude: 29.740200 }, // In hazard zone
            { longitude: -95.000600, latitude: 29.740000 },
            { longitude: -95.000800, latitude: 29.739800 },
            { longitude: -95.001000, latitude: 29.740000 },
            { longitude: -95.001200, latitude: 29.740200 },
            { longitude: -95.001400, latitude: 29.740400 },
            { longitude: -95.001600, latitude: 29.740600 },
            { longitude: -95.001800, latitude: 29.740800 },
            { longitude: -95.002000, latitude: 29.741000 },
            { longitude: -95.002200, latitude: 29.741200 },
            { longitude: -95.002000, latitude: 29.741400 },
            { longitude: -95.001800, latitude: 29.741600 },
            { longitude: -95.001600, latitude: 29.741800 },
            { longitude: -95.001400, latitude: 29.742000 },
            { longitude: -95.001200, latitude: 29.742200 },
            { longitude: -95.001000, latitude: 29.742400 },
            { longitude: -95.000800, latitude: 29.742600 },
            { longitude: -95.000600, latitude: 29.742800 },
            { longitude: -95.000400, latitude: 29.743000 },
            { longitude: -95.000200, latitude: 29.743200 },
            { longitude: -95.000000, latitude: 29.743400 },
            { longitude: -94.999800, latitude: 29.743600 },
            { longitude: -94.999600, latitude: 29.743800 },
            { longitude: -94.999400, latitude: 29.744000 },
            { longitude: -94.999200, latitude: 29.744200 },
            { longitude: -94.999000, latitude: 29.744000 },
            { longitude: -94.998800, latitude: 29.743800 },
            { longitude: -94.998600, latitude: 29.743600 },
            { longitude: -94.998400, latitude: 29.743400 },
            { longitude: -94.998200, latitude: 29.743200 },
            { longitude: -94.998000, latitude: 29.743000 },
            { longitude: -94.997800, latitude: 29.743200 },
            { longitude: -94.997600, latitude: 29.743400 },
            { longitude: -94.997400, latitude: 29.743600 },
            { longitude: -94.997200, latitude: 29.743800 },
            { longitude: -94.997000, latitude: 29.744000 },
        ],
    ];

    const colors = [
        Cesium.Color.RED,
        Cesium.Color.GREEN,
        Cesium.Color.BLUE,
        Cesium.Color.YELLOW,
    ];

    // Create hazard zone polygon with proper Cartesian3 vertices
    const hazardZoneVertices = [
        Cesium.Cartesian3.fromDegrees(-94.999028, 29.741748, 0),
        Cesium.Cartesian3.fromDegrees(-94.998381, 29.741377, 0),
        Cesium.Cartesian3.fromDegrees(-94.99947730766101, 29.739891707833397, 0),
        Cesium.Cartesian3.fromDegrees(-95.0006285442912, 29.740520027778356, 0),
        Cesium.Cartesian3.fromDegrees(-94.9999378023131, 29.7414910599502, 0),
        Cesium.Cartesian3.fromDegrees(-94.99904970548407, 29.74182425509735, 0)
    ];

    // Enhanced worker creation with trails
    const workers = paths.map((path, index) => {
        // Create an array to store trail positions
        const trailPositions = [];
        
        // Initialize with first position
        const firstPosition = Cesium.Cartesian3.fromDegrees(path[0].longitude, path[0].latitude, -21);
        trailPositions.push(firstPosition);
        
        // Create trail entity
        const trail = viewer.entities.add({
            polyline: {
                positions: new Cesium.CallbackProperty(() => {
                    return trailPositions.slice();  // Return a copy to avoid modification issues
                }, false),
                width: 2,
                material: new Cesium.PolylineGlowMaterialProperty({
                    glowPower: 0.2,
                    color: colors[index].withAlpha(0.5)
                })
            }
        });

        return {
            entity: viewer.entities.add({
                position: firstPosition,
                point: {
                    pixelSize: 10,
                    color: colors[index],
                },
                label: {
                    text: `Worker ${index+1}`,
                    fillColor: colors[index],
                    showBackground: true,
                    backgroundColor: Cesium.Color.WHITE.withAlpha(0.7),
                    font: '14px sans-serif',
                    style: Cesium.LabelStyle.FILL_AND_OUTLINE,
                    verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                    pixelOffset: new Cesium.Cartesian2(0, -20),
                }
            }),
            path: path,
            currentPathIndex: 0,
            trailPositions: trailPositions,
            trail: trail,
            lastUpdate: Date.now(),
            number: index + 1  // Store worker number directly
        };
    });

    // Add hazardous zone
    const hazardZone = viewer.entities.add({
        name: 'Hazardous Zone',
        polygon: {
            hierarchy: new Cesium.PolygonHierarchy(hazardZoneVertices),
            material: Cesium.Color.RED.withAlpha(0.5),
            outline: true,
            outlineColor: Cesium.Color.RED,
            height: -21
        }
    });

    // Control panel functionality
    let updateInterval = 5000;
    const speedControl = document.getElementById('speedControl');
    const statusList = document.getElementById('statusList');
    const alertsContainer = document.getElementById('alerts');
    const toggleButton = document.getElementById('togglePanel');
    const controlPanel = document.getElementById('controlPanel');
    const hazardAlert = document.getElementById('hazardAlert');
    const hazardMessage = document.getElementById('hazardMessage');
    const closeHazardAlertBtn = document.getElementById('closeHazardAlert');
    
    // Track workers in hazard zone
    let workersInHazardZone = [];
    let userAcknowledged = false;

    // Panel toggle functionality
    toggleButton.addEventListener('click', () => {
        controlPanel.classList.toggle('minimized');
        if (controlPanel.classList.contains('minimized')) {
            toggleButton.textContent = '+';
            toggleButton.title = "Expand control panel";
        } else {
            toggleButton.textContent = '−';
            toggleButton.title = "Minimize control panel";
        }
    });

    // Close hazard alert button
    closeHazardAlertBtn.addEventListener('click', () => {
        hazardAlert.classList.add('hidden');
        userAcknowledged = true;
    });

    speedControl.addEventListener('input', (e) => {
        updateInterval = (11 - e.target.value) * 1000;
        document.getElementById('speedValue').textContent = `${11 - e.target.value}s`;
        resetInterval();
    });

    function updateHazardAlert() {
        if (workersInHazardZone.length > 0 && !userAcknowledged) {
            // Update message
            if (workersInHazardZone.length === 1) {
                hazardMessage.textContent = `Worker ${workersInHazardZone[0]} has entered the hazardous zone!`;
            } else {
                const workersList = workersInHazardZone.join(', ');
                hazardMessage.textContent = `Workers ${workersList} have entered the hazardous zone!`;
            }
            
            // Show alert if hidden
            if (hazardAlert.classList.contains('hidden')) {
                hazardAlert.classList.remove('hidden');
            }
        } else {
            // Hide alert if all workers left hazard zone
            if (!hazardAlert.classList.contains('hidden') && workersInHazardZone.length === 0) {
                hazardAlert.classList.add('hidden');
                userAcknowledged = false;
            }
        }
    }

    // Improved point-to-polygon distance calculation
    function calculateDistanceToHazard(position) {
        try {
            // Get the corners of the hazard zone
            const hazardPositions = hazardZoneVertices;
            
            // Check if the point is inside the polygon first
            if (isPointInPolygon(position, hazardPositions)) {
                return 0; // Inside hazard zone
            }
            
            // Otherwise calculate minimum distance to any edge
            let minDistance = Number.MAX_VALUE;
            
            for (let i = 0; i < hazardPositions.length; i++) {
                const start = hazardPositions[i];
                const end = hazardPositions[(i + 1) % hazardPositions.length];
                
                const distance = distanceToLineSegment(position, start, end);
                minDistance = Math.min(minDistance, distance);
            }
            
            return minDistance;
        } catch (error) {
            console.error("Error calculating distance:", error);
            return 1000; // Return a large value to avoid errors breaking the app
        }
    }
    
    // Helper function to calculate distance to a line segment
    function distanceToLineSegment(point, lineStart, lineEnd) {
        const v = Cesium.Cartesian3.subtract(lineEnd, lineStart, new Cesium.Cartesian3());
        const w = Cesium.Cartesian3.subtract(point, lineStart, new Cesium.Cartesian3());
        
        const c1 = Cesium.Cartesian3.dot(w, v);
        if (c1 <= 0) {
            return Cesium.Cartesian3.distance(point, lineStart);
        }
        
        const c2 = Cesium.Cartesian3.dot(v, v);
        if (c2 <= c1) {
            return Cesium.Cartesian3.distance(point, lineEnd);
        }
        
        const b = c1 / c2;
        const pb = Cesium.Cartesian3.add(
            lineStart,
            Cesium.Cartesian3.multiplyByScalar(v, b, new Cesium.Cartesian3()),
            new Cesium.Cartesian3()
        );
        
        return Cesium.Cartesian3.distance(point, pb);
    }
    
    // Simple point-in-polygon test for 3D
    function isPointInPolygon(point, polygon) {
        try {
            // Project to 2D for easier calculation
            const scene = viewer.scene;
            const positions2D = polygon.map(position => 
                Cesium.SceneTransforms.wgs84ToWindowCoordinates(scene, position));
            const point2D = Cesium.SceneTransforms.wgs84ToWindowCoordinates(scene, point);
            
            if (!point2D || positions2D.some(p => !p)) {
                return false; // Handle offscreen points
            }
            
            // Ray casting algorithm
            let inside = false;
            for (let i = 0, j = positions2D.length - 1; i < positions2D.length; j = i++) {
                const xi = positions2D[i].x, yi = positions2D[i].y;
                const xj = positions2D[j].x, yj = positions2D[j].y;
                
                const intersect = ((yi > point2D.y) !== (yj > point2D.y)) &&
                    (point2D.x < (xj - xi) * (point2D.y - yi) / (yj - yi) + xi);
                if (intersect) inside = !inside;
            }
            
            return inside;
        } catch (error) {
            console.error("Error in point-in-polygon test:", error);
            return false; // Fail safely
        }
    }

    function updateWorkerStatus(worker, distance) {
        const workerNumber = worker.number; // Use stored worker number
        const status = distance < 10 ? 'danger' : distance < 30 ? 'warning' : 'safe';
        const statusText = `Worker ${workerNumber} - Distance to hazard: ${distance.toFixed(2)}m`;
        
        // Update hazard zone tracking
        const isInHazardZone = status === 'danger';
        const workerIndex = workersInHazardZone.indexOf(workerNumber);
        
        if (isInHazardZone && workerIndex === -1) {
            // Worker entered hazard zone
            workersInHazardZone.push(workerNumber);
            updateHazardAlert();
        } else if (!isInHazardZone && workerIndex !== -1) {
            // Worker left hazard zone
            workersInHazardZone.splice(workerIndex, 1);
            updateHazardAlert();
        }
        
        if (status === 'danger' && !worker.inDanger) {
            const alert = document.createElement('div');
            alert.className = 'alert';
            alert.textContent = `⚠️ WARNING: Worker ${workerNumber} is too close to hazard zone!`;
            alertsContainer.prepend(alert);
            setTimeout(() => alert.remove(), 5000);
            worker.inDanger = true;
        } else if (status !== 'danger') {
            worker.inDanger = false;
        }
        
        return { status, statusText };
    }

    function updateWorkersPositions() {
        try {
            const currentTime = Date.now();
            statusList.innerHTML = '';
            
            workers.forEach(worker => {
                const elapsed = currentTime - worker.lastUpdate;
                const progress = Math.min(1, elapsed / updateInterval);
                
                const currentPos = worker.path[worker.currentPathIndex];
                const nextPos = worker.path[(worker.currentPathIndex + 1) % worker.path.length];
                
                // Smoother cubic interpolation for position
                const smoothProgress = progress * progress * (3 - 2 * progress); // Cubic smoothing
                
                const interpolatedPos = {
                    longitude: currentPos.longitude + (nextPos.longitude - currentPos.longitude) * smoothProgress,
                    latitude: currentPos.latitude + (nextPos.latitude - currentPos.latitude) * smoothProgress
                };
                
                const position = Cesium.Cartesian3.fromDegrees(interpolatedPos.longitude, interpolatedPos.latitude, -21);
                worker.entity.position = position;
                
                // Safely update trail
                try {
                    // Add trail points more adaptively based on distance
                    const lastTrailPos = worker.trailPositions.length > 0 ? 
                        worker.trailPositions[worker.trailPositions.length - 1] : null;
                    
                    const shouldAddPoint = !lastTrailPos || 
                        Cesium.Cartesian3.distance(lastTrailPos, position) > 2.0;
                    
                    if (shouldAddPoint) {
                        // Make a copy to avoid reference issues
                        const newPosition = Cesium.Cartesian3.clone(position);
                        worker.trailPositions.push(newPosition);
                        
                        // Keep only last 100 positions for longer trails
                        if (worker.trailPositions.length > 100) {
                            worker.trailPositions.shift();
                        }
                    }
                } catch (error) {
                    console.error("Trail update error:", error);
                }
                
                // Update status
                try {
                    const distance = calculateDistanceToHazard(position);
                    const { status, statusText } = updateWorkerStatus(worker, distance);
                    
                    const statusElement = document.createElement('div');
                    statusElement.className = `worker-status-item ${status}`;
                    statusElement.textContent = statusText;
                    statusList.appendChild(statusElement);
                } catch (error) {
                    console.error("Status update error:", error);
                }
                
                if (progress === 1) {
                    worker.currentPathIndex = (worker.currentPathIndex + 1) % worker.path.length;
                    worker.lastUpdate = currentTime;
                }
            });

            viewer.scene.requestRender();
        } catch (error) {
            console.error("Worker position update error:", error);
        }
    }

    // Higher animation update rate for smoother motion
    let intervalId = setInterval(updateWorkersPositions, 16); // ~60fps

    function resetInterval() {
        clearInterval(intervalId);
        intervalId = setInterval(updateWorkersPositions, 16);
    }
}
