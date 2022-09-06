import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DisplayNameLocalization implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** If present, the value of this field contains the displayName string that has been set for the language present in the languageTag field. */
    private _displayName?: string | undefined;
    /** Provides the language culture-code and friendly name of the language that the displayName field has been provided in. */
    private _languageTag?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
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
     * Instantiates a new displayNameLocalization and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.displayNameLocalization";
    };
    /**
     * Gets the displayName property value. If present, the value of this field contains the displayName string that has been set for the language present in the languageTag field.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. If present, the value of this field contains the displayName string that has been set for the language present in the languageTag field.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "displayName": n => { this.displayName = n.getStringValue(); },
            "languageTag": n => { this.languageTag = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the languageTag property value. Provides the language culture-code and friendly name of the language that the displayName field has been provided in.
     * @returns a string
     */
    public get languageTag() {
        return this._languageTag;
    };
    /**
     * Sets the languageTag property value. Provides the language culture-code and friendly name of the language that the displayName field has been provided in.
     * @param value Value to set for the languageTag property.
     */
    public set languageTag(value: string | undefined) {
        this._languageTag = value;
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
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("languageTag", this.languageTag);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeAdditionalData(this.additionalData);
    };
}
