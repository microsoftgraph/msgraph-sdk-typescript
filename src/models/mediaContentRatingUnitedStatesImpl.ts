import {MediaContentRatingUnitedStates} from './mediaContentRatingUnitedStates';
import {RatingUnitedStatesMoviesType} from './ratingUnitedStatesMoviesType';
import {RatingUnitedStatesTelevisionType} from './ratingUnitedStatesTelevisionType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MediaContentRatingUnitedStatesImpl implements MediaContentRatingUnitedStates {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** Movies rating selected for United States. Possible values are: allAllowed, allBlocked, general, parentalGuidance, parentalGuidance13, restricted, adults. */
    private _movieRating?: RatingUnitedStatesMoviesType | undefined;
    /** TV rating selected for United States. Possible values are: allAllowed, allBlocked, childrenAll, childrenAbove7, general, parentalGuidance, childrenAbove14, adults. */
    private _tvRating?: RatingUnitedStatesTelevisionType | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new mediaContentRatingUnitedStates and sets the default values.
     * @param mediaContentRatingUnitedStatesParameterValue 
     */
    public constructor(mediaContentRatingUnitedStatesParameterValue?: MediaContentRatingUnitedStates | undefined) {
        this._additionalData = mediaContentRatingUnitedStatesParameterValue?.additionalData ? mediaContentRatingUnitedStatesParameterValue?.additionalData! : {};
        this._movieRating = mediaContentRatingUnitedStatesParameterValue?.movieRating;
        this._tvRating = mediaContentRatingUnitedStatesParameterValue?.tvRating;
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
     * Gets the movieRating property value. Movies rating selected for United States. Possible values are: allAllowed, allBlocked, general, parentalGuidance, parentalGuidance13, restricted, adults.
     * @returns a ratingUnitedStatesMoviesType
     */
    public get movieRating() {
        return this._movieRating;
    };
    /**
     * Sets the movieRating property value. Movies rating selected for United States. Possible values are: allAllowed, allBlocked, general, parentalGuidance, parentalGuidance13, restricted, adults.
     * @param value Value to set for the movieRating property.
     */
    public set movieRating(value: RatingUnitedStatesMoviesType | undefined) {
        if(value) {
            this._movieRating = value;
        }
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
    /**
     * Gets the tvRating property value. TV rating selected for United States. Possible values are: allAllowed, allBlocked, childrenAll, childrenAbove7, general, parentalGuidance, childrenAbove14, adults.
     * @returns a ratingUnitedStatesTelevisionType
     */
    public get tvRating() {
        return this._tvRating;
    };
    /**
     * Sets the tvRating property value. TV rating selected for United States. Possible values are: allAllowed, allBlocked, childrenAll, childrenAbove7, general, parentalGuidance, childrenAbove14, adults.
     * @param value Value to set for the tvRating property.
     */
    public set tvRating(value: RatingUnitedStatesTelevisionType | undefined) {
        if(value) {
            this._tvRating = value;
        }
    };
}
