import {MediaContentRatingIreland} from './mediaContentRatingIreland';
import {RatingIrelandMoviesType} from './ratingIrelandMoviesType';
import {RatingIrelandTelevisionType} from './ratingIrelandTelevisionType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MediaContentRatingIrelandImpl implements MediaContentRatingIreland {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Movies rating selected for Ireland. Possible values are: allAllowed, allBlocked, general, parentalGuidance, agesAbove12, agesAbove15, agesAbove16, adults. */
    public movieRating?: RatingIrelandMoviesType | undefined;
    /** TV rating selected for Ireland. Possible values are: allAllowed, allBlocked, general, children, youngAdults, parentalSupervision, mature. */
    public tvRating?: RatingIrelandTelevisionType | undefined;
    /**
     * Instantiates a new mediaContentRatingIreland and sets the default values.
     * @param mediaContentRatingIrelandParameterValue 
     */
    public constructor(mediaContentRatingIrelandParameterValue?: MediaContentRatingIreland | undefined) {
        this.additionalData = mediaContentRatingIrelandParameterValue?.additionalData ? mediaContentRatingIrelandParameterValue?.additionalData! : {};
        this.movieRating = mediaContentRatingIrelandParameterValue?.movieRating;
        this.tvRating = mediaContentRatingIrelandParameterValue?.tvRating;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "movieRating": n => { this.movieRating = n.getEnumValue<RatingIrelandMoviesType>(RatingIrelandMoviesType); },
            "tvRating": n => { this.tvRating = n.getEnumValue<RatingIrelandTelevisionType>(RatingIrelandTelevisionType); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.movieRating){
            writer.writeEnumValue<RatingIrelandMoviesType>("movieRating", this.movieRating);
        }
        if(this.tvRating){
            writer.writeEnumValue<RatingIrelandTelevisionType>("tvRating", this.tvRating);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
