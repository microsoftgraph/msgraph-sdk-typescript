import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookIcon extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Represents the index of the icon in the given set.
     */
    index?: number | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Represents the set that the icon is part of. The possible values are: Invalid, ThreeArrows, ThreeArrowsGray, ThreeFlags, ThreeTrafficLights1, ThreeTrafficLights2, ThreeSigns, ThreeSymbols, ThreeSymbols2, FourArrows, FourArrowsGray, FourRedToBlack, FourRating, FourTrafficLights, FiveArrows, FiveArrowsGray, FiveRating, FiveQuarters, ThreeStars, ThreeTriangles, FiveBoxes.
     */
    set?: string | undefined;
}
