import {MediaContentRatingUnitedKingdom} from './mediaContentRatingUnitedKingdom';
import {RatingUnitedKingdomMoviesType} from './ratingUnitedKingdomMoviesType';
import {RatingUnitedKingdomTelevisionType} from './ratingUnitedKingdomTelevisionType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MediaContentRatingUnitedKingdomImpl implements MediaContentRatingUnitedKingdom {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Movies rating selected for United Kingdom. Possible values are: allAllowed, allBlocked, general, universalChildren, parentalGuidance, agesAbove12Video, agesAbove12Cinema, agesAbove15, adults. */
    public movieRating?: RatingUnitedKingdomMoviesType | undefined;
    /** TV rating selected for United Kingdom. Possible values are: allAllowed, allBlocked, caution. */
    public tvRating?: RatingUnitedKingdomTelevisionType | undefined;
    /**
     * Instantiates a new mediaContentRatingUnitedKingdom and sets the default values.
     * @param mediaContentRatingUnitedKingdomParameterValue 
     */
    public constructor(mediaContentRatingUnitedKingdomParameterValue?: MediaContentRatingUnitedKingdom | undefined) {
        this.additionalData = mediaContentRatingUnitedKingdomParameterValue?.additionalData ? mediaContentRatingUnitedKingdomParameterValue?.additionalData! : {};
        this.movieRating = mediaContentRatingUnitedKingdomParameterValue?.movieRating;
        this.tvRating = mediaContentRatingUnitedKingdomParameterValue?.tvRating;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "movieRating": n => { this.movieRating = n.getEnumValue<RatingUnitedKingdomMoviesType>(RatingUnitedKingdomMoviesType); },
            "tvRating": n => { this.tvRating = n.getEnumValue<RatingUnitedKingdomTelevisionType>(RatingUnitedKingdomTelevisionType); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.movieRating){
            writer.writeEnumValue<RatingUnitedKingdomMoviesType>("movieRating", this.movieRating);
        }
        if(this.tvRating){
            writer.writeEnumValue<RatingUnitedKingdomTelevisionType>("tvRating", this.tvRating);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
