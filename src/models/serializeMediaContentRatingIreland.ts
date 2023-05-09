import {MediaContentRatingIreland} from './mediaContentRatingIreland';
import {RatingIrelandMoviesType} from './ratingIrelandMoviesType';
import {RatingIrelandTelevisionType} from './ratingIrelandTelevisionType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMediaContentRatingIreland(writer: SerializationWriter, mediaContentRatingIreland: MediaContentRatingIreland | undefined = {} as MediaContentRatingIreland) : void {
        writer.writeEnumValue<RatingIrelandMoviesType>("movieRating", mediaContentRatingIreland.movieRating);
        writer.writeStringValue("@odata.type", mediaContentRatingIreland.odataType);
        writer.writeEnumValue<RatingIrelandTelevisionType>("tvRating", mediaContentRatingIreland.tvRating);
        writer.writeAdditionalData(mediaContentRatingIreland.additionalData);
}
