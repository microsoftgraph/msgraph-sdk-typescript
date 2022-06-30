import {MediaContentRatingIreland} from './mediaContentRatingIreland';
import {RatingIrelandMoviesType} from './ratingIrelandMoviesType';
import {RatingIrelandTelevisionType} from './ratingIrelandTelevisionType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MediaContentRatingIrelandImpl implements MediaContentRatingIreland {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Movies rating selected for Ireland. Possible values are: allAllowed, allBlocked, general, parentalGuidance, agesAbove12, agesAbove15, agesAbove16, adults. */
    private _movieRating?: RatingIrelandMoviesType | undefined;
    /** TV rating selected for Ireland. Possible values are: allAllowed, allBlocked, general, children, youngAdults, parentalSupervision, mature. */
    private _tvRating?: RatingIrelandTelevisionType | undefined;
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
    public set additionalData(value: Record<string, unknown>) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new mediaContentRatingIreland and sets the default values.
     * @param mediaContentRatingIrelandParameterValue 
     */
    public constructor(mediaContentRatingIrelandParameterValue?: MediaContentRatingIreland | undefined) {
        this._additionalData = mediaContentRatingIrelandParameterValue?.additionalData ? mediaContentRatingIrelandParameterValue?.additionalData! : {};
        this._movieRating = mediaContentRatingIrelandParameterValue?.movieRating;
        this._tvRating = mediaContentRatingIrelandParameterValue?.tvRating;
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
     * Gets the movieRating property value. Movies rating selected for Ireland. Possible values are: allAllowed, allBlocked, general, parentalGuidance, agesAbove12, agesAbove15, agesAbove16, adults.
     * @returns a ratingIrelandMoviesType
     */
    public get movieRating() {
        return this._movieRating;
    };
    /**
     * Sets the movieRating property value. Movies rating selected for Ireland. Possible values are: allAllowed, allBlocked, general, parentalGuidance, agesAbove12, agesAbove15, agesAbove16, adults.
     * @param value Value to set for the movieRating property.
     */
    public set movieRating(value: RatingIrelandMoviesType | undefined) {
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
            writer.writeEnumValue<RatingIrelandMoviesType>("movieRating", this.movieRating);
        }
        if(this.tvRating){
            writer.writeEnumValue<RatingIrelandTelevisionType>("tvRating", this.tvRating);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the tvRating property value. TV rating selected for Ireland. Possible values are: allAllowed, allBlocked, general, children, youngAdults, parentalSupervision, mature.
     * @returns a ratingIrelandTelevisionType
     */
    public get tvRating() {
        return this._tvRating;
    };
    /**
     * Sets the tvRating property value. TV rating selected for Ireland. Possible values are: allAllowed, allBlocked, general, children, youngAdults, parentalSupervision, mature.
     * @param value Value to set for the tvRating property.
     */
    public set tvRating(value: RatingIrelandTelevisionType | undefined) {
        if(value) {
            this._tvRating = value;
        }
    };
}
