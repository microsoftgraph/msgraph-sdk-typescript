import {GiphyRatingType} from './giphyRatingType';
import {TeamFunSettings} from './teamFunSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamFunSettingsImpl implements TeamFunSettings {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** If set to true, enables users to include custom memes. */
    private _allowCustomMemes?: boolean | undefined;
    /** If set to true, enables Giphy use. */
    private _allowGiphy?: boolean | undefined;
    /** If set to true, enables users to include stickers and memes. */
    private _allowStickersAndMemes?: boolean | undefined;
    /** Giphy content rating. Possible values are: moderate, strict. */
    private _giphyContentRating?: GiphyRatingType | undefined;
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
     * Gets the allowCustomMemes property value. If set to true, enables users to include custom memes.
     * @returns a boolean
     */
    public get allowCustomMemes() {
        return this._allowCustomMemes;
    };
    /**
     * Sets the allowCustomMemes property value. If set to true, enables users to include custom memes.
     * @param value Value to set for the allowCustomMemes property.
     */
    public set allowCustomMemes(value: boolean | undefined) {
        if(value) {
            this._allowCustomMemes = value;
        }
    };
    /**
     * Gets the allowGiphy property value. If set to true, enables Giphy use.
     * @returns a boolean
     */
    public get allowGiphy() {
        return this._allowGiphy;
    };
    /**
     * Sets the allowGiphy property value. If set to true, enables Giphy use.
     * @param value Value to set for the allowGiphy property.
     */
    public set allowGiphy(value: boolean | undefined) {
        if(value) {
            this._allowGiphy = value;
        }
    };
    /**
     * Gets the allowStickersAndMemes property value. If set to true, enables users to include stickers and memes.
     * @returns a boolean
     */
    public get allowStickersAndMemes() {
        return this._allowStickersAndMemes;
    };
    /**
     * Sets the allowStickersAndMemes property value. If set to true, enables users to include stickers and memes.
     * @param value Value to set for the allowStickersAndMemes property.
     */
    public set allowStickersAndMemes(value: boolean | undefined) {
        if(value) {
            this._allowStickersAndMemes = value;
        }
    };
    /**
     * Instantiates a new teamFunSettings and sets the default values.
     * @param teamFunSettingsParameterValue 
     */
    public constructor(teamFunSettingsParameterValue?: TeamFunSettings | undefined) {
        this._additionalData = teamFunSettingsParameterValue?.additionalData ? teamFunSettingsParameterValue?.additionalData! : {};
        this._allowCustomMemes = teamFunSettingsParameterValue?.allowCustomMemes;
        this._allowGiphy = teamFunSettingsParameterValue?.allowGiphy;
        this._allowStickersAndMemes = teamFunSettingsParameterValue?.allowStickersAndMemes;
        this._giphyContentRating = teamFunSettingsParameterValue?.giphyContentRating;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "allowCustomMemes": n => { this.allowCustomMemes = n.getBooleanValue(); },
            "allowGiphy": n => { this.allowGiphy = n.getBooleanValue(); },
            "allowStickersAndMemes": n => { this.allowStickersAndMemes = n.getBooleanValue(); },
            "giphyContentRating": n => { this.giphyContentRating = n.getEnumValue<GiphyRatingType>(GiphyRatingType); },
        };
    };
    /**
     * Gets the giphyContentRating property value. Giphy content rating. Possible values are: moderate, strict.
     * @returns a giphyRatingType
     */
    public get giphyContentRating() {
        return this._giphyContentRating;
    };
    /**
     * Sets the giphyContentRating property value. Giphy content rating. Possible values are: moderate, strict.
     * @param value Value to set for the giphyContentRating property.
     */
    public set giphyContentRating(value: GiphyRatingType | undefined) {
        if(value) {
            this._giphyContentRating = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.allowCustomMemes){
            writer.writeBooleanValue("allowCustomMemes", this.allowCustomMemes);
        }
        if(this.allowGiphy){
            writer.writeBooleanValue("allowGiphy", this.allowGiphy);
        }
        if(this.allowStickersAndMemes){
            writer.writeBooleanValue("allowStickersAndMemes", this.allowStickersAndMemes);
        }
        if(this.giphyContentRating){
            writer.writeEnumValue<GiphyRatingType>("giphyContentRating", this.giphyContentRating);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
