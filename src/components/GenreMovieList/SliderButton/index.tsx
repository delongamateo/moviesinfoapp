import { FC, RefObject } from 'react'
import { Button } from '@chakra-ui/react'

type SliderButtonProps = {
    side: string;
    offsetWidthValue?: number;
    divRef: RefObject<HTMLDivElement>
}

const SliderButton: FC<SliderButtonProps> = ({ side, offsetWidthValue, divRef }) => {
    const scroll = (side: string) => {
        const offsetWidthValue = divRef.current?.offsetWidth
        if (!offsetWidthValue) return;
        if (side === "left") {
            divRef.current!.scrollLeft += offsetWidthValue - 150
        } else {
            divRef.current!.scrollLeft -= offsetWidthValue - 150
        }

    }

    return (
        <Button
            pos="fixed"
            left={offsetWidthValue ?? 10}
            h={72}
            borderRadius="none"
            color="white"
            bg="rgba(0, 0, 0, 0.5)"
            _hover={{ bg: "rgba(0, 0, 0, 0.5)" }}
            _active={{ bg: "rgba(0, 0, 0, 0.5)" }}
            onClick={() => scroll(side)}
        >
            {side === "left" ? ">" : "<"}
        </Button>
    )
}

export default SliderButton