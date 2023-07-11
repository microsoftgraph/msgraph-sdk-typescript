import {RatingNewZealandMoviesType} from './ratingNewZealandMoviesType';
import {RatingNewZealandTelevisionType} from './ratingNewZealandTelevisionType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MediaContentRatingNewZealand extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Movies rating labels in New Zealand
     */
    movieRating?: RatingNewZealandMoviesType | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * TV content rating labels in New Zealand
     */
    tvRating?: RatingNewZealandTelevisionType | undefined;
}
