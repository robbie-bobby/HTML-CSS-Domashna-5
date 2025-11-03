window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const hero = document.getElementsByTagName('main')[0];

    const scrollPercent = Math.min(scrollY / (viewportHeight * 0.3), 1);

    const startGradient = {
        color1: [132, 80, 195],
        color2: [100, 100, 200],
        color2: [20, 115, 180],
        color4: [1, 137, 150],
        color5: [0, 170, 120],
        color6: [0, 200, 90]
    };

    const endGradient = {
        color1: [132, 94, 195],
        color2: [215, 93, 178],
        color3: [255, 149, 113],
        color4: [254, 199, 96],
        color5: [248, 249, 112],
        color6: [239, 250, 99]
    };

    // Convert objects to array
    const startArray = Object.values(startGradient);
    const endArray = Object.values(endGradient);

    // Interpolate each color stop
    const currentGradient = startArray.map((startColor, index) => {
        const endColor = endArray[index];

        return startColor.map((start, channel) => {
            return Math.round(start + (endColor[channel] - start) * scrollPercent);
        });
    });

    const gradientStops = currentGradient.map(color => `rgb(${color.join(',')})`).join(', ');

    hero.style.background = `linear-gradient(45deg, ${gradientStops})`;
});