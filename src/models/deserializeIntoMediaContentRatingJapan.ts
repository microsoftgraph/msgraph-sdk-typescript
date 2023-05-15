import {MediaContentRatingJapan} from './mediaContentRatingJapan';
import {RatingJapanMoviesType} from './ratingJapanMoviesType';
import {RatingJapanTelevisionType} from './ratingJapanTelevisionType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMediaContentRatingJapan(mediaContentRatingJapan: MediaContentRatingJapan | undefined = {} as MediaContentRatingJapan) : Record<string, (node: ParseNode) => void> {
    return {
        "movieRating": n => { mediaContentRatingJapan.movieRating = n.getEnumValue<RatingJapanMoviesType>(RatingJapanMoviesType); },
        "@odata.type": n => { mediaContentRatingJapan.odataType = n.getStringValue(); },
        "tvRating": n => { mediaContentRatingJapan.tvRating = n.getEnumValue<RatingJapanTelevisionType>(RatingJapanTelevisionType); },
    }
}
