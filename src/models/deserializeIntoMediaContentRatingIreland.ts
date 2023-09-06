import { type MediaContentRatingIreland } from './mediaContentRatingIreland';
import { RatingIrelandMoviesType } from './ratingIrelandMoviesType';
import { RatingIrelandTelevisionType } from './ratingIrelandTelevisionType';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoMediaContentRatingIreland(mediaContentRatingIreland: MediaContentRatingIreland | undefined = {} as MediaContentRatingIreland) : Record<string, (node: ParseNode) => void> {
    return {
        "movieRating": n => { mediaContentRatingIreland.movieRating = n.getEnumValue<RatingIrelandMoviesType>(RatingIrelandMoviesType); },
        "@odata.type": n => { mediaContentRatingIreland.odataType = n.getStringValue(); },
        "tvRating": n => { mediaContentRatingIreland.tvRating = n.getEnumValue<RatingIrelandTelevisionType>(RatingIrelandTelevisionType); },
    }
}
