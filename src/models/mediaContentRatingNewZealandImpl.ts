import {MediaContentRatingNewZealand} from './mediaContentRatingNewZealand';
import {RatingNewZealandMoviesType} from './ratingNewZealandMoviesType';
import {RatingNewZealandTelevisionType} from './ratingNewZealandTelevisionType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MediaContentRatingNewZealandImpl implements MediaContentRatingNewZealand {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Movies rating selected for New Zealand. Possible values are: allAllowed, allBlocked, general, parentalGuidance, mature, agesAbove13, agesAbove15, agesAbove16, agesAbove18, restricted, agesAbove16Restricted. */
    public movieRating?: RatingNewZealandMoviesType | undefined;
    /** TV rating selected for New Zealand. Possible values are: allAllowed, allBlocked, general, parentalGuidance, adults. */
    public tvRating?: RatingNewZealandTelevisionType | undefined;
    /**
     * Instantiates a new mediaContentRatingNewZealand and sets the default values.
     * @param mediaContentRatingNewZealandParameterValue 
     */
    public constructor(mediaContentRatingNewZealandParameterValue?: MediaContentRatingNewZealand | undefined) {
        this.additionalData = mediaContentRatingNewZealandParameterValue?.additionalData ? mediaContentRatingNewZealandParameterValue?.additionalData! : {};
        this.movieRating = mediaContentRatingNewZealandParameterValue?.movieRating;
        this.tvRating = mediaContentRatingNewZealandParameterValue?.tvRating;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "movieRating": n => { this.movieRating = n.getEnumValue<RatingNewZealandMoviesType>(RatingNewZealandMoviesType); },
            "tvRating": n => { this.tvRating = n.getEnumValue<RatingNewZealandTelevisionType>(RatingNewZealandTelevisionType); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.movieRating){
            writer.writeEnumValue<RatingNewZealandMoviesType>("movieRating", this.movieRating);
        }
        if(this.tvRating){
            writer.writeEnumValue<RatingNewZealandTelevisionType>("tvRating", this.tvRating);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
