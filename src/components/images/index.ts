import ImageCracker from "assets/images/cracker.png";
import ImageCorn from "assets/images/corn.png";
import ImageSesame from "assets/images/sesame.png";
import ImageSoybean from "assets/images/soybean.png";
import ImageWheat from "assets/images/wheat.png";
import ImagePackage from "assets/images/package.png";

import ImageCornSmall from "assets/images/corn-small.png";
import ImageSesameSmall from "assets/images/sesame-small.png";
import ImageSoybeanSmall from "assets/images/soybean-small.png";
import ImageWheatSmall from "assets/images/wheat-small.png";

const images = {
    ImageCracker,
    ImageCorn,
    ImageSesame,
    ImageWheat,
    ImageSoybean,
    ImagePackage,

    ImageCornSmall,
    ImageSesameSmall,
    ImageSoybeanSmall,
    ImageWheatSmall,
};

export default images;

export type ImagesKey = keyof typeof images;