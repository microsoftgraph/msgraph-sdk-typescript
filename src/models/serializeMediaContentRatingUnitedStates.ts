import {MediaContentRatingUnitedStates} from './mediaContentRatingUnitedStates';
import {RatingUnitedStatesMoviesType} from './ratingUnitedStatesMoviesType';
import {RatingUnitedStatesTelevisionType} from './ratingUnitedStatesTelevisionType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMediaContentRatingUnitedStates(writer: SerializationWriter, mediaContentRatingUnitedStates: MediaContentRatingUnitedStates | undefined = {} as MediaContentRatingUnitedStates) : void {
        writer.writeEnumValue<RatingUnitedStatesMoviesType>("movieRating", mediaContentRatingUnitedStates.movieRating);
        writer.writeStringValue("@odata.type", mediaContentRatingUnitedStates.odataType);
        writer.writeEnumValue<RatingUnitedStatesTelevisionType>("tvRating", mediaContentRatingUnitedStates.tvRating);
        writer.writeAdditionalData(mediaContentRatingUnitedStates.additionalData);
}
