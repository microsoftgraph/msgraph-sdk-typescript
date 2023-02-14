import {createAccessPackageLocalizedTextFromDiscriminatorValue} from './createAccessPackageLocalizedTextFromDiscriminatorValue';
import {AccessPackageLocalizedText} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessPackageAnswerChoice implements AdditionalDataHolder, Parsable {
    /** The actual value of the selected choice. This is typically a string value which is understandable by applications. Required. */
    private _actualValue?: string | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The text of the answer choice represented in a format for a specific locale. */
    private _localizations?: AccessPackageLocalizedText[] | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The text property */
    private _text?: string | undefined;
    /**
     * Gets the actualValue property value. The actual value of the selected choice. This is typically a string value which is understandable by applications. Required.
     * @returns a string
     */
    public get actualValue() {
        return this._actualValue;
    };
    /**
     * Sets the actualValue property value. The actual value of the selected choice. This is typically a string value which is understandable by applications. Required.
     * @param value Value to set for the actualValue property.
     */
    public set actualValue(value: string | undefined) {
        this._actualValue = value;
    };
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
     * Instantiates a new accessPackageAnswerChoice and sets the default values.
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
            "actualValue": n => { this.actualValue = n.getStringValue(); },
            "localizations": n => { this.localizations = n.getCollectionOfObjectValues<AccessPackageLocalizedText>(createAccessPackageLocalizedTextFromDiscriminatorValue); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "text": n => { this.text = n.getStringValue(); },
        };
    };
    /**
     * Gets the localizations property value. The text of the answer choice represented in a format for a specific locale.
     * @returns a accessPackageLocalizedText
     */
    public get localizations() {
        return this._localizations;
    };
    /**
     * Sets the localizations property value. The text of the answer choice represented in a format for a specific locale.
     * @param value Value to set for the localizations property.
     */
    public set localizations(value: AccessPackageLocalizedText[] | undefined) {
        this._localizations = value;
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
        writer.writeStringValue("actualValue", this.actualValue);
        writer.writeCollectionOfObjectValues<AccessPackageLocalizedText>("localizations", this.localizations);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("text", this.text);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the text property value. The text property
     * @returns a string
     */
    public get text() {
        return this._text;
    };
    /**
     * Sets the text property value. The text property
     * @param value Value to set for the text property.
     */
    public set text(value: string | undefined) {
        this._text = value;
    };
}
