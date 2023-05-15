import {MediaContentRatingNewZealand} from './mediaContentRatingNewZealand';
import {RatingNewZealandMoviesType} from './ratingNewZealandMoviesType';
import {RatingNewZealandTelevisionType} from './ratingNewZealandTelevisionType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMediaContentRatingNewZealand(mediaContentRatingNewZealand: MediaContentRatingNewZealand | undefined = {} as MediaContentRatingNewZealand) : Record<string, (node: ParseNode) => void> {
    return {
        "movieRating": n => { mediaContentRatingNewZealand.movieRating = n.getEnumValue<RatingNewZealandMoviesType>(RatingNewZealandMoviesType); },
        "@odata.type": n => { mediaContentRatingNewZealand.odataType = n.getStringValue(); },
        "tvRating": n => { mediaContentRatingNewZealand.tvRating = n.getEnumValue<RatingNewZealandTelevisionType>(RatingNewZealandTelevisionType); },
    }
}
