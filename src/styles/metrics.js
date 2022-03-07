import { Dimensions, PixelRatio } from "react-native";

const { width, height } = Dimensions.get('window')

const fimgaWidth = 375;

const px = (valuePx) => {
    const widthPercent = (valuePx / fimgaWidth) * 100
    const screenPixel = PixelRatio.roundToNearestPixel(
        (width * parseFloat(widthPercent)) / 100
    )
    return screenPixel
}

export const metrics = {
    px,
    width,
    height
}

