import {MediaContentRatingFrance} from './mediaContentRatingFrance';
import {RatingFranceMoviesType} from './ratingFranceMoviesType';
import {RatingFranceTelevisionType} from './ratingFranceTelevisionType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMediaContentRatingFrance(mediaContentRatingFrance: MediaContentRatingFrance | undefined = {} as MediaContentRatingFrance) : Record<string, (node: ParseNode) => void> {
    return {
        "movieRating": n => { mediaContentRatingFrance.movieRating = n.getEnumValue<RatingFranceMoviesType>(RatingFranceMoviesType); },
        "@odata.type": n => { mediaContentRatingFrance.odataType = n.getStringValue(); },
        "tvRating": n => { mediaContentRatingFrance.tvRating = n.getEnumValue<RatingFranceTelevisionType>(RatingFranceTelevisionType); },
    }
}
