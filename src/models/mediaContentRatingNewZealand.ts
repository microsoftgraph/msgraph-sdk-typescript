import {RatingNewZealandMoviesType} from './ratingNewZealandMoviesType';
import {RatingNewZealandTelevisionType} from './ratingNewZealandTelevisionType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MediaContentRatingNewZealand implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Movies rating labels in New Zealand */
    private _movieRating?: RatingNewZealandMoviesType | undefined;
    /** TV content rating labels in New Zealand */
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
     * Gets the movieRating property value. Movies rating labels in New Zealand
     * @returns a ratingNewZealandMoviesType
     */
    public get movieRating() {
        return this._movieRating;
    };
    /**
     * Sets the movieRating property value. Movies rating labels in New Zealand
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
     * Gets the tvRating property value. TV content rating labels in New Zealand
     * @returns a ratingNewZealandTelevisionType
     */
    public get tvRating() {
        return this._tvRating;
    };
    /**
     * Sets the tvRating property value. TV content rating labels in New Zealand
     * @param value Value to set for the tvRating property.
     */
    public set tvRating(value: RatingNewZealandTelevisionType | undefined) {
        this._tvRating = value;
    };
}