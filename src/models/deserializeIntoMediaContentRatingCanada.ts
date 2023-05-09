import {MediaContentRatingCanada} from './mediaContentRatingCanada';
import {RatingCanadaMoviesType} from './ratingCanadaMoviesType';
import {RatingCanadaTelevisionType} from './ratingCanadaTelevisionType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMediaContentRatingCanada(mediaContentRatingCanada: MediaContentRatingCanada | undefined = {} as MediaContentRatingCanada) : Record<string, (node: ParseNode) => void> {
    return {
        "movieRating": n => { mediaContentRatingCanada.movieRating = n.getEnumValue<RatingCanadaMoviesType>(RatingCanadaMoviesType); },
        "@odata.type": n => { mediaContentRatingCanada.odataType = n.getStringValue(); },
        "tvRating": n => { mediaContentRatingCanada.tvRating = n.getEnumValue<RatingCanadaTelevisionType>(RatingCanadaTelevisionType); },
    }
}
