import { Affix, Button, Stack, ColorInput, DEFAULT_THEME } from '@mantine/core';
import { useCharacterAnimations } from '../contexts/CharacterAnimations';

const Interface = () => {
    const { animations, animationIndex, setAnimationIndex, setColor } = useCharacterAnimations()
    return (
        <Affix position={{ bottom: 50, right: 20 }}>
            <Stack>
            {
                animations.map((animation, index) => (
                    <Button 
                        key={animation} 
                        variant={index === animationIndex ? "default" : "light"}
                        onClick={() => setAnimationIndex(index)}
                    >
                        {animation}
                    </Button>
                ))
            }
            </Stack>
            <Stack>
            <ColorInput
                placeholder="Pick color"
                label="Change Hair Color"
                disallowInput
                withPicker={false}
                onChange={(val) => setColor(val)}
                swatches={[
                    ...DEFAULT_THEME.colors.red,
                    ...DEFAULT_THEME.colors.green,
                    ...DEFAULT_THEME.colors.blue,
                ]}
            />
            </Stack>
        </Affix>
    )
}

export default Interface;