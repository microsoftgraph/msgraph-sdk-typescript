import {RatingIrelandMoviesType} from './ratingIrelandMoviesType';
import {RatingIrelandTelevisionType} from './ratingIrelandTelevisionType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MediaContentRatingIreland extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Movies rating labels in Ireland
     */
    movieRating?: RatingIrelandMoviesType | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * TV content rating labels in Ireland
     */
    tvRating?: RatingIrelandTelevisionType | undefined;
}
