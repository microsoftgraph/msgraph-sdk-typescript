import {MediaContentRatingUnitedStates} from './mediaContentRatingUnitedStates';
import {RatingUnitedStatesMoviesType} from './ratingUnitedStatesMoviesType';
import {RatingUnitedStatesTelevisionType} from './ratingUnitedStatesTelevisionType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MediaContentRatingUnitedStatesImpl implements MediaContentRatingUnitedStates {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Movies rating selected for United States. Possible values are: allAllowed, allBlocked, general, parentalGuidance, parentalGuidance13, restricted, adults. */
    public movieRating?: RatingUnitedStatesMoviesType | undefined;
    /** TV rating selected for United States. Possible values are: allAllowed, allBlocked, childrenAll, childrenAbove7, general, parentalGuidance, childrenAbove14, adults. */
    public tvRating?: RatingUnitedStatesTelevisionType | undefined;
    /**
     * Instantiates a new mediaContentRatingUnitedStates and sets the default values.
     * @param mediaContentRatingUnitedStatesParameterValue 
     */
    public constructor(mediaContentRatingUnitedStatesParameterValue?: MediaContentRatingUnitedStates | undefined) {
        this.additionalData = mediaContentRatingUnitedStatesParameterValue?.additionalData ? mediaContentRatingUnitedStatesParameterValue?.additionalData! : {};
        this.movieRating = mediaContentRatingUnitedStatesParameterValue?.movieRating;
        this.tvRating = mediaContentRatingUnitedStatesParameterValue?.tvRating;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "movieRating": n => { this.movieRating = n.getEnumValue<RatingUnitedStatesMoviesType>(RatingUnitedStatesMoviesType); },
            "tvRating": n => { this.tvRating = n.getEnumValue<RatingUnitedStatesTelevisionType>(RatingUnitedStatesTelevisionType); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.movieRating){
            writer.writeEnumValue<RatingUnitedStatesMoviesType>("movieRating", this.movieRating);
        }
        if(this.tvRating){
            writer.writeEnumValue<RatingUnitedStatesTelevisionType>("tvRating", this.tvRating);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
