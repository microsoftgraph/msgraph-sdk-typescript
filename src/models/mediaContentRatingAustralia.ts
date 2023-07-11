import {RatingAustraliaMoviesType} from './ratingAustraliaMoviesType';
import {RatingAustraliaTelevisionType} from './ratingAustraliaTelevisionType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MediaContentRatingAustralia extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Movies rating labels in Australia
     */
    movieRating?: RatingAustraliaMoviesType | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * TV content rating labels in Australia
     */
    tvRating?: RatingAustraliaTelevisionType | undefined;
}
