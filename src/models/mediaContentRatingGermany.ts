import {RatingGermanyMoviesType} from './ratingGermanyMoviesType';
import {RatingGermanyTelevisionType} from './ratingGermanyTelevisionType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MediaContentRatingGermany extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Movies rating selected for Germany. Possible values are: allAllowed, allBlocked, general, agesAbove6, agesAbove12, agesAbove16, adults. */
    movieRating?: RatingGermanyMoviesType | undefined;
    /** TV rating selected for Germany. Possible values are: allAllowed, allBlocked, general, agesAbove6, agesAbove12, agesAbove16, adults. */
    tvRating?: RatingGermanyTelevisionType | undefined;
}
