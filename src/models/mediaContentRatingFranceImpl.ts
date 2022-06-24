import {MediaContentRatingFrance} from './mediaContentRatingFrance';
import {RatingFranceMoviesType} from './ratingFranceMoviesType';
import {RatingFranceTelevisionType} from './ratingFranceTelevisionType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MediaContentRatingFranceImpl implements MediaContentRatingFrance {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Movies rating selected for France. Possible values are: allAllowed, allBlocked, agesAbove10, agesAbove12, agesAbove16, agesAbove18. */
    public movieRating?: RatingFranceMoviesType | undefined;
    /** TV rating selected for France. Possible values are: allAllowed, allBlocked, agesAbove10, agesAbove12, agesAbove16, agesAbove18. */
    public tvRating?: RatingFranceTelevisionType | undefined;
    /**
     * Instantiates a new mediaContentRatingFrance and sets the default values.
     * @param mediaContentRatingFranceParameterValue 
     */
    public constructor(mediaContentRatingFranceParameterValue?: MediaContentRatingFrance | undefined) {
        this.additionalData = mediaContentRatingFranceParameterValue?.additionalData ? mediaContentRatingFranceParameterValue?.additionalData! : {};
        this.movieRating = mediaContentRatingFranceParameterValue?.movieRating;
        this.tvRating = mediaContentRatingFranceParameterValue?.tvRating;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "movieRating": n => { this.movieRating = n.getEnumValue<RatingFranceMoviesType>(RatingFranceMoviesType); },
            "tvRating": n => { this.tvRating = n.getEnumValue<RatingFranceTelevisionType>(RatingFranceTelevisionType); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.movieRating){
            writer.writeEnumValue<RatingFranceMoviesType>("movieRating", this.movieRating);
        }
        if(this.tvRating){
            writer.writeEnumValue<RatingFranceTelevisionType>("tvRating", this.tvRating);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
