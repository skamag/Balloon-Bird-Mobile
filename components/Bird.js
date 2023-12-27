import { View, Image } from 'react-native';

const Bird = ({birdBottom, birdLeft}) => {
    const birdWidth = 50
    const birdHeight = 60

    return(
        <View style={{
            position: 'absolute',
            width: birdWidth,
            height: birdHeight,
            left: birdLeft - (birdWidth/2),
            bottom: birdBottom - (birdHeight/2),
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Image source={require('../balloon-fight-small.png')}  />
        </View>
    )
}

export default Bird