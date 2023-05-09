import {MediaContentRatingAustralia} from './mediaContentRatingAustralia';
import {RatingAustraliaMoviesType} from './ratingAustraliaMoviesType';
import {RatingAustraliaTelevisionType} from './ratingAustraliaTelevisionType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMediaContentRatingAustralia(mediaContentRatingAustralia: MediaContentRatingAustralia | undefined = {} as MediaContentRatingAustralia) : Record<string, (node: ParseNode) => void> {
    return {
        "movieRating": n => { mediaContentRatingAustralia.movieRating = n.getEnumValue<RatingAustraliaMoviesType>(RatingAustraliaMoviesType); },
        "@odata.type": n => { mediaContentRatingAustralia.odataType = n.getStringValue(); },
        "tvRating": n => { mediaContentRatingAustralia.tvRating = n.getEnumValue<RatingAustraliaTelevisionType>(RatingAustraliaTelevisionType); },
    }
}
