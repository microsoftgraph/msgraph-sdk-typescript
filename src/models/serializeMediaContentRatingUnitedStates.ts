import { type MediaContentRatingUnitedStates } from './mediaContentRatingUnitedStates';
import { RatingUnitedStatesMoviesType } from './ratingUnitedStatesMoviesType';
import { RatingUnitedStatesTelevisionType } from './ratingUnitedStatesTelevisionType';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeMediaContentRatingUnitedStates(writer: SerializationWriter, mediaContentRatingUnitedStates: MediaContentRatingUnitedStates | undefined = {} as MediaContentRatingUnitedStates) : void {
        writer.writeEnumValue<RatingUnitedStatesMoviesType>("movieRating", mediaContentRatingUnitedStates.movieRating);
        writer.writeStringValue("@odata.type", mediaContentRatingUnitedStates.odataType);
        writer.writeEnumValue<RatingUnitedStatesTelevisionType>("tvRating", mediaContentRatingUnitedStates.tvRating);
        writer.writeAdditionalData(mediaContentRatingUnitedStates.additionalData);
}
