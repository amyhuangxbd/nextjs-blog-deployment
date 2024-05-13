function Circle({ transform }: { transform: string; }) {
    return <circle r={15} transform={ transform } />
}

function Star({ transform }: { transform: string; }) {
    return (
        <polygon 
            points="0, -20 6, -8 19, -6 10, 3 12, 16 0, 10 -12, 16 -10, 3 -19, -6 -6, -8"
            transform={transform}
        />
    )
}

function Tree({ transform }: { transform: string; }) {
    return (
        <polygon
            points="0,-24 8,-8 6,-8 12,4 10,4 16,16 4,16 4,22
            -4,22 -4,16 -16,16 -10,4 -12,4 -6,-8 -8,-8"
            transform={transform}
        />
    )
}

function Motif({ shape, number }: {
    shape: string;
    number: number;
}) {
    const Shape = ({
        circle: Circle,
        star: Star,
        tree: Tree,
    }[shape]) as any;
    if (number == 1) {
        return <Shape  transform="translate(0, 0)" />;
    }

    if (number == 2) {
        return (
            <g>
                <Shape transform="translate(-30, 0)" />
                <Shape transform="translate(30, 0)" />
            </g>
        )
    }

    return (
        <g>
            <Shape />
            <Shape transform="translate(-40, 0)" />
            <Shape transform="translate(40, 0)" />
        </g>
    )
}

export default Motif;