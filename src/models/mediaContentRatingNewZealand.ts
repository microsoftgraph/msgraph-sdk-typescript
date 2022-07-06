import {RatingNewZealandMoviesType} from './ratingNewZealandMoviesType';
import {RatingNewZealandTelevisionType} from './ratingNewZealandTelevisionType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MediaContentRatingNewZealand implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Movies rating selected for New Zealand. Possible values are: allAllowed, allBlocked, general, parentalGuidance, mature, agesAbove13, agesAbove15, agesAbove16, agesAbove18, restricted, agesAbove16Restricted. */
    private _movieRating?: RatingNewZealandMoviesType | undefined;
    /** TV rating selected for New Zealand. Possible values are: allAllowed, allBlocked, general, parentalGuidance, adults. */
    private _tvRating?: RatingNewZealandTelevisionType | undefined;
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
        this._additionalData = value;
    };
    /**
     * Instantiates a new mediaContentRatingNewZealand and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
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
     * Gets the movieRating property value. Movies rating selected for New Zealand. Possible values are: allAllowed, allBlocked, general, parentalGuidance, mature, agesAbove13, agesAbove15, agesAbove16, agesAbove18, restricted, agesAbove16Restricted.
     * @returns a ratingNewZealandMoviesType
     */
    public get movieRating() {
        return this._movieRating;
    };
    /**
     * Sets the movieRating property value. Movies rating selected for New Zealand. Possible values are: allAllowed, allBlocked, general, parentalGuidance, mature, agesAbove13, agesAbove15, agesAbove16, agesAbove18, restricted, agesAbove16Restricted.
     * @param value Value to set for the movieRating property.
     */
    public set movieRating(value: RatingNewZealandMoviesType | undefined) {
        this._movieRating = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<RatingNewZealandMoviesType>("movieRating", this.movieRating);
        writer.writeEnumValue<RatingNewZealandTelevisionType>("tvRating", this.tvRating);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the tvRating property value. TV rating selected for New Zealand. Possible values are: allAllowed, allBlocked, general, parentalGuidance, adults.
     * @returns a ratingNewZealandTelevisionType
     */
    public get tvRating() {
        return this._tvRating;
    };
    /**
     * Sets the tvRating property value. TV rating selected for New Zealand. Possible values are: allAllowed, allBlocked, general, parentalGuidance, adults.
     * @param value Value to set for the tvRating property.
     */
    public set tvRating(value: RatingNewZealandTelevisionType | undefined) {
        this._tvRating = value;
    };
}
