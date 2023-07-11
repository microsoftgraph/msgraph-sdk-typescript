import {GiphyRatingType} from './giphyRatingType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TeamFunSettings extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * If set to true, enables users to include custom memes.
     */
    allowCustomMemes?: boolean | undefined;
    /**
     * If set to true, enables Giphy use.
     */
    allowGiphy?: boolean | undefined;
    /**
     * If set to true, enables users to include stickers and memes.
     */
    allowStickersAndMemes?: boolean | undefined;
    /**
     * Giphy content rating. Possible values are: moderate, strict.
     */
    giphyContentRating?: GiphyRatingType | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
