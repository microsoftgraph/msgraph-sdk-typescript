import { type MediaContentRatingCanada } from './mediaContentRatingCanada';
import { RatingCanadaMoviesType } from './ratingCanadaMoviesType';
import { RatingCanadaTelevisionType } from './ratingCanadaTelevisionType';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeMediaContentRatingCanada(writer: SerializationWriter, mediaContentRatingCanada: MediaContentRatingCanada | undefined = {} as MediaContentRatingCanada) : void {
        writer.writeEnumValue<RatingCanadaMoviesType>("movieRating", mediaContentRatingCanada.movieRating);
        writer.writeStringValue("@odata.type", mediaContentRatingCanada.odataType);
        writer.writeEnumValue<RatingCanadaTelevisionType>("tvRating", mediaContentRatingCanada.tvRating);
        writer.writeAdditionalData(mediaContentRatingCanada.additionalData);
}
