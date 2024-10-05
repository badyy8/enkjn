function createCandles() {
    const candleContainer = document.getElementById('candles');
    const numCandles = 21;
    const cakeWidth = 240;
    const cakeHeight = 90;
    const candleWidth = 16; // Match the CSS
    const candleHeight = 50; // Match the CSS
    const placedCandles = [];

    function isOverlapping(x, y) {
        for (const candle of placedCandles) {
            const dx = Math.abs(candle.x - x);
            const dy = Math.abs(candle.y - y);
            if (dx < candleWidth && dy < candleHeight) {
                return true;
            }
        }
        return false;
    }

    for (let i = 0; i < numCandles; i++) {
        let x, y;
        do {
            x = Math.random() * (cakeWidth - candleWidth);
            y = Math.random() * (cakeHeight - candleHeight);
        } while (isOverlapping(x, y));

        placedCandles.push({ x, y });

        const candle = document.createElement('div');
        candle.className = 'candle';
        candle.style.left = `${x}px`;
        candle.style.top = `${y}px`;

        const flame = document.createElement('div');
        flame.className = 'flame';
        candle.appendChild(flame);

        candleContainer.appendChild(candle);
    }
}
