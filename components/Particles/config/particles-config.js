const particlesConfig = {
  background: {
    color: {
      value: '#0d47a1'
    },
    position: '50% 50%',
    repeat: 'no-repeat',
    size: 'cover'
  },
  fullScreen: {
    zIndex: 1
  },
  interactivity: {
    events: {
      onClick: {
        mode: 'push'
      },
      onHover: {
        mode: 'repulse'
      }
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
        divs: {
          distance: 200,
          duration: 0.4,
          mix: false,
          selectors: []
        }
      },
      grab: {
        distance: 400
      },
      repulse: {
        divs: {
          distance: 200,
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 50,
          easing: 'ease-out-quad',
          selectors: []
        }
      }
    }
  },
  particles: {
    color: {
      value: '#ffffff'
    },
    links: {
      color: {
        value: '#ffffff'
      },
      distance: 150,
      opacity: 0.4
    },
    move: {
      attract: {
        rotate: {
          x: 600,
          y: 1200
        }
      },
      enable: true,
      outModes: {
        default: 'destroy',
        bottom: 'destroy',
        left: 'destroy',
        right: 'destroy',
        top: 'destroy'
      },
      speed: 5
    },
    number: {
      density: {
        enable: true
      },
      value: 0
    },
    opacity: {
      animation: {
        speed: 3,
        minimumValue: 0.1
      }
    },
    size: {
      value: {
        min: 0.1,
        max: 20
      },
      animation: {
        enable: true,
        sync: true,
        destroy: 'max',
        startValue: 'min',
        minimumValue: 0.1
      }
    }
  },
  emitters: {
    autoPlay: true,
    fill: true,
    life: {
      wait: false
    },
    rate: {
      quantity: 2,
      delay: 0.1
    },
    shape: 'square',
    startCount: 0,
    size: {
      mode: 'percent',
      height: 0,
      width: 100
    },
    direction: 'top',
    position: {
      x: 50,
      y: 100
    }
  }
}
export default particlesConfig