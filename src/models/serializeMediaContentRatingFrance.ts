import {MediaContentRatingFrance} from './mediaContentRatingFrance';
import {RatingFranceMoviesType} from './ratingFranceMoviesType';
import {RatingFranceTelevisionType} from './ratingFranceTelevisionType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMediaContentRatingFrance(writer: SerializationWriter, mediaContentRatingFrance: MediaContentRatingFrance | undefined = {} as MediaContentRatingFrance) : void {
        writer.writeEnumValue<RatingFranceMoviesType>("movieRating", mediaContentRatingFrance.movieRating);
        writer.writeStringValue("@odata.type", mediaContentRatingFrance.odataType);
        writer.writeEnumValue<RatingFranceTelevisionType>("tvRating", mediaContentRatingFrance.tvRating);
        writer.writeAdditionalData(mediaContentRatingFrance.additionalData);
}
