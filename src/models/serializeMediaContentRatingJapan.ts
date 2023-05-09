import {MediaContentRatingJapan} from './mediaContentRatingJapan';
import {RatingJapanMoviesType} from './ratingJapanMoviesType';
import {RatingJapanTelevisionType} from './ratingJapanTelevisionType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMediaContentRatingJapan(writer: SerializationWriter, mediaContentRatingJapan: MediaContentRatingJapan | undefined = {} as MediaContentRatingJapan) : void {
        writer.writeEnumValue<RatingJapanMoviesType>("movieRating", mediaContentRatingJapan.movieRating);
        writer.writeStringValue("@odata.type", mediaContentRatingJapan.odataType);
        writer.writeEnumValue<RatingJapanTelevisionType>("tvRating", mediaContentRatingJapan.tvRating);
        writer.writeAdditionalData(mediaContentRatingJapan.additionalData);
}
