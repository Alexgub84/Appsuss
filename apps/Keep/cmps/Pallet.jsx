export function Pallet({ isShown, onUpdateColor }) {
    const colors = ['red', 'blue', 'yellow', 'green', 'dark blue', 'grey'];
    return (
        <div className="pallet" style={{ opacity: (isShown) ? 1 : 0 }}>
            {colors.map((color,idx) => (
                <div key={idx} style={{backgroundColor: color}}
                    className="color"
                    onClick={() => { onUpdateColor(color) }}>
                    &nbsp;
                </div>))}
        </div>
    );
}