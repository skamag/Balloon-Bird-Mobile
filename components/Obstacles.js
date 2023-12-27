import { View, Image } from 'react-native'

const Obstacles = ({
    obstaclesLeft, 
    obstacleWidth, 
    obstacleHeight, 
    gap,
    randomBottom
}) => {
    return(
        <>
            <View style={{
                position: 'absolute',
                width: obstacleWidth,
                height: obstacleHeight,
                left: obstaclesLeft,
                transform: [{rotate: '180deg'}],
                bottom: randomBottom + obstacleHeight + gap,
            }}>
                <Image source={require('../flappybird-pipe.png')} />
            </View>
            <View style={{
                position: 'absolute',
                width: obstacleWidth,
                height: obstacleHeight,
                left: obstaclesLeft,
                bottom: randomBottom,
            }}>
                <Image source={require('../flappybird-pipe.png')} />
            </View>
        </>
    )
}

export default Obstacles