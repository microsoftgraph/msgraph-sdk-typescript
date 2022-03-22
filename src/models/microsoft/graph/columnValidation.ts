import {createDisplayNameLocalizationFromDiscriminatorValue} from './createDisplayNameLocalizationFromDiscriminatorValue';
import {DisplayNameLocalization} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ColumnValidation implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    /** Default BCP 47 language tag for the description.  */
    private _defaultLanguage?: string | undefined;
    /** Localized messages that explain what is needed for this column's value to be considered valid. User will be prompted with this message if validation fails.  */
    private _descriptions?: DisplayNameLocalization[] | undefined;
    /** The formula to validate column value. For examples, see Examples of common formulas in lists.  */
    private _formula?: string | undefined;
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
     * Instantiates a new columnValidation and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the defaultLanguage property value. Default BCP 47 language tag for the description.
     * @returns a string
     */
    public get defaultLanguage() {
        return this._defaultLanguage;
    };
    /**
     * Sets the defaultLanguage property value. Default BCP 47 language tag for the description.
     * @param value Value to set for the defaultLanguage property.
     */
    public set defaultLanguage(value: string | undefined) {
        this._defaultLanguage = value;
    };
    /**
     * Gets the descriptions property value. Localized messages that explain what is needed for this column's value to be considered valid. User will be prompted with this message if validation fails.
     * @returns a displayNameLocalization
     */
    public get descriptions() {
        return this._descriptions;
    };
    /**
     * Sets the descriptions property value. Localized messages that explain what is needed for this column's value to be considered valid. User will be prompted with this message if validation fails.
     * @param value Value to set for the descriptions property.
     */
    public set descriptions(value: DisplayNameLocalization[] | undefined) {
        this._descriptions = value;
    };
    /**
     * Gets the formula property value. The formula to validate column value. For examples, see Examples of common formulas in lists.
     * @returns a string
     */
    public get formula() {
        return this._formula;
    };
    /**
     * Sets the formula property value. The formula to validate column value. For examples, see Examples of common formulas in lists.
     * @param value Value to set for the formula property.
     */
    public set formula(value: string | undefined) {
        this._formula = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {
            "defaultLanguage": (o, n) => { (o as unknown as ColumnValidation).defaultLanguage = n.getStringValue(); },
            "descriptions": (o, n) => { (o as unknown as ColumnValidation).descriptions = n.getCollectionOfObjectValues<DisplayNameLocalization>(createDisplayNameLocalizationFromDiscriminatorValue); },
            "formula": (o, n) => { (o as unknown as ColumnValidation).formula = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("defaultLanguage", this.defaultLanguage);
        writer.writeCollectionOfObjectValues<DisplayNameLocalization>("descriptions", this.descriptions);
        writer.writeStringValue("formula", this.formula);
        writer.writeAdditionalData(this.additionalData);
    };
}
