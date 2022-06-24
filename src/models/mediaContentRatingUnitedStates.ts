import {RatingUnitedStatesMoviesType} from './ratingUnitedStatesMoviesType';
import {RatingUnitedStatesTelevisionType} from './ratingUnitedStatesTelevisionType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MediaContentRatingUnitedStates extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Movies rating selected for United States. Possible values are: allAllowed, allBlocked, general, parentalGuidance, parentalGuidance13, restricted, adults. */
    movieRating?: RatingUnitedStatesMoviesType | undefined;
    /** TV rating selected for United States. Possible values are: allAllowed, allBlocked, childrenAll, childrenAbove7, general, parentalGuidance, childrenAbove14, adults. */
    tvRating?: RatingUnitedStatesTelevisionType | undefined;
}
