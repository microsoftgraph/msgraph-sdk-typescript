import {MediaContentRatingAustralia} from './mediaContentRatingAustralia';
import {RatingAustraliaMoviesType} from './ratingAustraliaMoviesType';
import {RatingAustraliaTelevisionType} from './ratingAustraliaTelevisionType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MediaContentRatingAustraliaImpl implements MediaContentRatingAustralia {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Movies rating selected for Australia. Possible values are: allAllowed, allBlocked, general, parentalGuidance, mature, agesAbove15, agesAbove18. */
    public movieRating?: RatingAustraliaMoviesType | undefined;
    /** TV rating selected for Australia. Possible values are: allAllowed, allBlocked, preschoolers, children, general, parentalGuidance, mature, agesAbove15, agesAbove15AdultViolence. */
    public tvRating?: RatingAustraliaTelevisionType | undefined;
    /**
     * Instantiates a new mediaContentRatingAustralia and sets the default values.
     * @param mediaContentRatingAustraliaParameterValue 
     */
    public constructor(mediaContentRatingAustraliaParameterValue?: MediaContentRatingAustralia | undefined) {
        this.additionalData = mediaContentRatingAustraliaParameterValue?.additionalData ? mediaContentRatingAustraliaParameterValue?.additionalData! : {};
        this.movieRating = mediaContentRatingAustraliaParameterValue?.movieRating;
        this.tvRating = mediaContentRatingAustraliaParameterValue?.tvRating;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "movieRating": n => { this.movieRating = n.getEnumValue<RatingAustraliaMoviesType>(RatingAustraliaMoviesType); },
            "tvRating": n => { this.tvRating = n.getEnumValue<RatingAustraliaTelevisionType>(RatingAustraliaTelevisionType); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.movieRating){
            writer.writeEnumValue<RatingAustraliaMoviesType>("movieRating", this.movieRating);
        }
        if(this.tvRating){
            writer.writeEnumValue<RatingAustraliaTelevisionType>("tvRating", this.tvRating);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
