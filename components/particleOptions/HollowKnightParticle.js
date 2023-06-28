const HollowKnightParticle = {
    "fullScreen": {
        "enable": true,
        "zIndex": 1
    },
    "detectRetina": false,
    "fpsLimit": 120,
    "interactivity": {
        "events": {
            "onClick": {
                "enable": false,
                "mode": "push"
            },
            "onDiv": {
                "elementId": "repulse-div",
                "enable": false,
                "mode": "repulse"
            },
            "onHover": {
                "enable": true,
                "mode": ["grab"]
            },
            "resize": true
        },
        "modes": {
            "bubble": {
                "distance": 200,
                "duration": 2,
                "opacity": 8,
                "size": 6,
                "speed": 3
            },
            "connect": {
                "distance": 80,
                "lineLinked": {
                    "opacity": 0.5
                },
                "radius": 60
            },
            "grab": {
                "distance": 60,
                "lineLinked": {
                    "opacity": 1
                }
            },
            "push": {
                "quantity": 4
            },
            "remove": {
                "quantity": 2
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "slow": {
                "active": false,
                "radius": 0,
                "factor": 1
            }
        }
    },
    "particles": {
        "color": {
            "value": "#ffffff"
        },
        "lineLinked": {
            "blink": false,
            "color": "#ffffff",
            "consent": false,
            "distance": 80,
            "enable": true,
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "attract": {
                "enable": false,
                "rotate": {
                    "x": 600,
                    "y": 1200
                }
            },
            "bounce": false,
            "direction": "none",
            "enable": true,
            "outMode": "bounce",
            "random": false,
            "speed": 1,
            "straight": false
        },
        "number": {
            "limit": 0,
            "value": 200
        },
        "opacity": {
            "animation": {
                "enable": true,
                "minimumValue": 0.05,
                "speed": 2,
                "sync": false
            },
            "random": false,
            "value": 0.4
        },
        "shape": {
            "type": "circle"
        },
        "size": {
            "animation": {
                "enable": false,
                "minimumValue": 0.1,
                "speed": 40,
                "sync": false
            },
            "random": true,
            "value": 1
        }
    },
    "polygon": {
        "draw": {
            "enable": true,
            "lineColor": "rgba(255,255,255,0.2)",
            "lineWidth": 0.5
        },
        "enable": true,
        "move": {
            "radius": 10
        },
        "inline": {
            "arrangement": "equidistant"
        },
        "scale": 2,
        "type": "inline",
        "url": "https://particles.js.org/images/hollowknight.svg"
    },
    "background": {
        "color": "#000000",
        "image": "",
        "position": "50% 50%",
        "repeat": "no-repeat",
        "size": "cover"
    }
}

export default HollowKnightParticle;