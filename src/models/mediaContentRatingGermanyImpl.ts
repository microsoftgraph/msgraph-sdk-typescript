import {MediaContentRatingGermany} from './mediaContentRatingGermany';
import {RatingGermanyMoviesType} from './ratingGermanyMoviesType';
import {RatingGermanyTelevisionType} from './ratingGermanyTelevisionType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MediaContentRatingGermanyImpl implements MediaContentRatingGermany {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Movies rating selected for Germany. Possible values are: allAllowed, allBlocked, general, agesAbove6, agesAbove12, agesAbove16, adults. */
    public movieRating?: RatingGermanyMoviesType | undefined;
    /** TV rating selected for Germany. Possible values are: allAllowed, allBlocked, general, agesAbove6, agesAbove12, agesAbove16, adults. */
    public tvRating?: RatingGermanyTelevisionType | undefined;
    /**
     * Instantiates a new mediaContentRatingGermany and sets the default values.
     * @param mediaContentRatingGermanyParameterValue 
     */
    public constructor(mediaContentRatingGermanyParameterValue?: MediaContentRatingGermany | undefined) {
        this.additionalData = mediaContentRatingGermanyParameterValue?.additionalData ? mediaContentRatingGermanyParameterValue?.additionalData! : {};
        this.movieRating = mediaContentRatingGermanyParameterValue?.movieRating;
        this.tvRating = mediaContentRatingGermanyParameterValue?.tvRating;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "movieRating": n => { this.movieRating = n.getEnumValue<RatingGermanyMoviesType>(RatingGermanyMoviesType); },
            "tvRating": n => { this.tvRating = n.getEnumValue<RatingGermanyTelevisionType>(RatingGermanyTelevisionType); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.movieRating){
            writer.writeEnumValue<RatingGermanyMoviesType>("movieRating", this.movieRating);
        }
        if(this.tvRating){
            writer.writeEnumValue<RatingGermanyTelevisionType>("tvRating", this.tvRating);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
