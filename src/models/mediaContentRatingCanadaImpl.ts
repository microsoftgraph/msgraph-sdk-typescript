import {MediaContentRatingCanada} from './mediaContentRatingCanada';
import {RatingCanadaMoviesType} from './ratingCanadaMoviesType';
import {RatingCanadaTelevisionType} from './ratingCanadaTelevisionType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MediaContentRatingCanadaImpl implements MediaContentRatingCanada {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Movies rating selected for Canada. Possible values are: allAllowed, allBlocked, general, parentalGuidance, agesAbove14, agesAbove18, restricted. */
    public movieRating?: RatingCanadaMoviesType | undefined;
    /** TV rating selected for Canada. Possible values are: allAllowed, allBlocked, children, childrenAbove8, general, parentalGuidance, agesAbove14, agesAbove18. */
    public tvRating?: RatingCanadaTelevisionType | undefined;
    /**
     * Instantiates a new mediaContentRatingCanada and sets the default values.
     * @param mediaContentRatingCanadaParameterValue 
     */
    public constructor(mediaContentRatingCanadaParameterValue?: MediaContentRatingCanada | undefined) {
        this.additionalData = mediaContentRatingCanadaParameterValue?.additionalData ? mediaContentRatingCanadaParameterValue?.additionalData! : {};
        this.movieRating = mediaContentRatingCanadaParameterValue?.movieRating;
        this.tvRating = mediaContentRatingCanadaParameterValue?.tvRating;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "movieRating": n => { this.movieRating = n.getEnumValue<RatingCanadaMoviesType>(RatingCanadaMoviesType); },
            "tvRating": n => { this.tvRating = n.getEnumValue<RatingCanadaTelevisionType>(RatingCanadaTelevisionType); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.movieRating){
            writer.writeEnumValue<RatingCanadaMoviesType>("movieRating", this.movieRating);
        }
        if(this.tvRating){
            writer.writeEnumValue<RatingCanadaTelevisionType>("tvRating", this.tvRating);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
