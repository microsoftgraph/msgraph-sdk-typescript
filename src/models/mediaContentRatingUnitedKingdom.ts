import {RatingUnitedKingdomMoviesType} from './ratingUnitedKingdomMoviesType';
import {RatingUnitedKingdomTelevisionType} from './ratingUnitedKingdomTelevisionType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MediaContentRatingUnitedKingdom extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Movies rating labels in United Kingdom
     */
    movieRating?: RatingUnitedKingdomMoviesType | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * TV content rating labels in United Kingdom
     */
    tvRating?: RatingUnitedKingdomTelevisionType | undefined;
}
