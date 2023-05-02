import {MediaContentRatingCanada} from './mediaContentRatingCanada';
import {RatingCanadaMoviesType} from './ratingCanadaMoviesType';
import {RatingCanadaTelevisionType} from './ratingCanadaTelevisionType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMediaContentRatingCanada(writer: SerializationWriter, mediaContentRatingCanada: MediaContentRatingCanada | undefined = {} as MediaContentRatingCanada) : void {
        writer.writeEnumValue<RatingCanadaMoviesType>("movieRating", mediaContentRatingCanada.movieRating);
        writer.writeStringValue("@odata.type", mediaContentRatingCanada.odataType);
        writer.writeEnumValue<RatingCanadaTelevisionType>("tvRating", mediaContentRatingCanada.tvRating);
        writer.writeAdditionalData(mediaContentRatingCanada.additionalData);
}
