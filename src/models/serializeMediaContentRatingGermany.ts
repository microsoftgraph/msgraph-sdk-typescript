import {MediaContentRatingGermany} from './mediaContentRatingGermany';
import {RatingGermanyMoviesType} from './ratingGermanyMoviesType';
import {RatingGermanyTelevisionType} from './ratingGermanyTelevisionType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMediaContentRatingGermany(writer: SerializationWriter, mediaContentRatingGermany: MediaContentRatingGermany | undefined = {} as MediaContentRatingGermany) : void {
        writer.writeEnumValue<RatingGermanyMoviesType>("movieRating", mediaContentRatingGermany.movieRating);
        writer.writeStringValue("@odata.type", mediaContentRatingGermany.odataType);
        writer.writeEnumValue<RatingGermanyTelevisionType>("tvRating", mediaContentRatingGermany.tvRating);
        writer.writeAdditionalData(mediaContentRatingGermany.additionalData);
}
