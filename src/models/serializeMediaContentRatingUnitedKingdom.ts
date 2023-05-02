import {MediaContentRatingUnitedKingdom} from './mediaContentRatingUnitedKingdom';
import {RatingUnitedKingdomMoviesType} from './ratingUnitedKingdomMoviesType';
import {RatingUnitedKingdomTelevisionType} from './ratingUnitedKingdomTelevisionType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMediaContentRatingUnitedKingdom(writer: SerializationWriter, mediaContentRatingUnitedKingdom: MediaContentRatingUnitedKingdom | undefined = {} as MediaContentRatingUnitedKingdom) : void {
        writer.writeEnumValue<RatingUnitedKingdomMoviesType>("movieRating", mediaContentRatingUnitedKingdom.movieRating);
        writer.writeStringValue("@odata.type", mediaContentRatingUnitedKingdom.odataType);
        writer.writeEnumValue<RatingUnitedKingdomTelevisionType>("tvRating", mediaContentRatingUnitedKingdom.tvRating);
        writer.writeAdditionalData(mediaContentRatingUnitedKingdom.additionalData);
}
