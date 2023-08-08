import type {MediaContentRatingNewZealand} from './mediaContentRatingNewZealand';
import {RatingNewZealandMoviesType} from './ratingNewZealandMoviesType';
import {RatingNewZealandTelevisionType} from './ratingNewZealandTelevisionType';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMediaContentRatingNewZealand(writer: SerializationWriter, mediaContentRatingNewZealand: MediaContentRatingNewZealand | undefined = {} as MediaContentRatingNewZealand) : void {
        writer.writeEnumValue<RatingNewZealandMoviesType>("movieRating", mediaContentRatingNewZealand.movieRating);
        writer.writeStringValue("@odata.type", mediaContentRatingNewZealand.odataType);
        writer.writeEnumValue<RatingNewZealandTelevisionType>("tvRating", mediaContentRatingNewZealand.tvRating);
        writer.writeAdditionalData(mediaContentRatingNewZealand.additionalData);
}
