import { type MediaContentRatingUnitedKingdom } from './mediaContentRatingUnitedKingdom';
import { RatingUnitedKingdomMoviesType } from './ratingUnitedKingdomMoviesType';
import { RatingUnitedKingdomTelevisionType } from './ratingUnitedKingdomTelevisionType';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoMediaContentRatingUnitedKingdom(mediaContentRatingUnitedKingdom: MediaContentRatingUnitedKingdom | undefined = {} as MediaContentRatingUnitedKingdom) : Record<string, (node: ParseNode) => void> {
    return {
        "movieRating": n => { mediaContentRatingUnitedKingdom.movieRating = n.getEnumValue<RatingUnitedKingdomMoviesType>(RatingUnitedKingdomMoviesType); },
        "@odata.type": n => { mediaContentRatingUnitedKingdom.odataType = n.getStringValue(); },
        "tvRating": n => { mediaContentRatingUnitedKingdom.tvRating = n.getEnumValue<RatingUnitedKingdomTelevisionType>(RatingUnitedKingdomTelevisionType); },
    }
}
