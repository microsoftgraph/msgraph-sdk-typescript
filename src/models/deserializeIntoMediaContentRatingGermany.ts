import {MediaContentRatingGermany} from './mediaContentRatingGermany';
import {RatingGermanyMoviesType} from './ratingGermanyMoviesType';
import {RatingGermanyTelevisionType} from './ratingGermanyTelevisionType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMediaContentRatingGermany(mediaContentRatingGermany: MediaContentRatingGermany | undefined = {} as MediaContentRatingGermany) : Record<string, (node: ParseNode) => void> {
    return {
        "movieRating": n => { mediaContentRatingGermany.movieRating = n.getEnumValue<RatingGermanyMoviesType>(RatingGermanyMoviesType); },
        "@odata.type": n => { mediaContentRatingGermany.odataType = n.getStringValue(); },
        "tvRating": n => { mediaContentRatingGermany.tvRating = n.getEnumValue<RatingGermanyTelevisionType>(RatingGermanyTelevisionType); },
    }
}
