const BackGround = () => {
    return ( <div style={{
        width: 200,
        height: 200,
        backgroundColor: '#38755b',
        backgroundRepeat: 'repeat',
        backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'50\' height=\'50\' viewBox=\'0 0 120 120\'%3E%3Cpolygon fill=\'%230c5c4c\' points=\'120 120 60 120 90 90 120 60 120 0 120 0 60 60 0 0 0 60 30 90 60 120 120 120 \'/%3E%3C/svg%3E")'
    }} className="background" /> );
};

export default BackGround;