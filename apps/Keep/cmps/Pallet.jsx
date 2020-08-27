export function Pallet({ isShown, onUpdateColor }) {
    const colors = ['#f28b82', '#fbbc04', '#fff475', '#ccff90', '#a7ffeb', '#d7aefb', '#e6c9a8', '#e8eaed'];
    return (
        <div className="pallet" style={{ opacity: (isShown) ? 1 : 0 }}>
            {colors.map((color, idx) => (
                <div key={idx} style={{ backgroundColor: color, border: '1px solid #303030  ', cursor: (isShown) ? 'pointer': 'default' }}
                    className="color"
                    onClick={() => { (isShown) ? onUpdateColor(color) : () => { } }}>
                    &nbsp;
                </div>))}
        </div>
    );
}