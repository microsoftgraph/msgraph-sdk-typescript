import { type MediaContentRatingUnitedStates } from './mediaContentRatingUnitedStates';
import { RatingUnitedStatesMoviesType } from './ratingUnitedStatesMoviesType';
import { RatingUnitedStatesTelevisionType } from './ratingUnitedStatesTelevisionType';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoMediaContentRatingUnitedStates(mediaContentRatingUnitedStates: MediaContentRatingUnitedStates | undefined = {} as MediaContentRatingUnitedStates) : Record<string, (node: ParseNode) => void> {
    return {
        "movieRating": n => { mediaContentRatingUnitedStates.movieRating = n.getEnumValue<RatingUnitedStatesMoviesType>(RatingUnitedStatesMoviesType); },
        "@odata.type": n => { mediaContentRatingUnitedStates.odataType = n.getStringValue(); },
        "tvRating": n => { mediaContentRatingUnitedStates.tvRating = n.getEnumValue<RatingUnitedStatesTelevisionType>(RatingUnitedStatesTelevisionType); },
    }
}
