import { type MediaContentRatingAustralia } from './mediaContentRatingAustralia';
import { RatingAustraliaMoviesType } from './ratingAustraliaMoviesType';
import { RatingAustraliaTelevisionType } from './ratingAustraliaTelevisionType';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeMediaContentRatingAustralia(writer: SerializationWriter, mediaContentRatingAustralia: MediaContentRatingAustralia | undefined = {} as MediaContentRatingAustralia) : void {
        writer.writeEnumValue<RatingAustraliaMoviesType>("movieRating", mediaContentRatingAustralia.movieRating);
        writer.writeStringValue("@odata.type", mediaContentRatingAustralia.odataType);
        writer.writeEnumValue<RatingAustraliaTelevisionType>("tvRating", mediaContentRatingAustralia.tvRating);
        writer.writeAdditionalData(mediaContentRatingAustralia.additionalData);
}
