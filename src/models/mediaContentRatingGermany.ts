import {RatingGermanyMoviesType} from './ratingGermanyMoviesType';
import {RatingGermanyTelevisionType} from './ratingGermanyTelevisionType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MediaContentRatingGermany implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Movies rating labels in Germany */
    private _movieRating?: RatingGermanyMoviesType | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** TV content rating labels in Germany */
    private _tvRating?: RatingGermanyTelevisionType | undefined;
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
     * Instantiates a new mediaContentRatingGermany and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.mediaContentRatingGermany";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "movieRating": n => { this.movieRating = n.getEnumValue<RatingGermanyMoviesType>(RatingGermanyMoviesType); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "tvRating": n => { this.tvRating = n.getEnumValue<RatingGermanyTelevisionType>(RatingGermanyTelevisionType); },
        };
    };
    /**
     * Gets the movieRating property value. Movies rating labels in Germany
     * @returns a ratingGermanyMoviesType
     */
    public get movieRating() {
        return this._movieRating;
    };
    /**
     * Sets the movieRating property value. Movies rating labels in Germany
     * @param value Value to set for the movieRating property.
     */
    public set movieRating(value: RatingGermanyMoviesType | undefined) {
        this._movieRating = value;
    };
    /**
     * Gets the @odata.type property value. The OdataType property
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. The OdataType property
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<RatingGermanyMoviesType>("movieRating", this.movieRating);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeEnumValue<RatingGermanyTelevisionType>("tvRating", this.tvRating);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the tvRating property value. TV content rating labels in Germany
     * @returns a ratingGermanyTelevisionType
     */
    public get tvRating() {
        return this._tvRating;
    };
    /**
     * Sets the tvRating property value. TV content rating labels in Germany
     * @param value Value to set for the tvRating property.
     */
    public set tvRating(value: RatingGermanyTelevisionType | undefined) {
        this._tvRating = value;
    };
}
