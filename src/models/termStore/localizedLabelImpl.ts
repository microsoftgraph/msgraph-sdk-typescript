import {LocalizedLabel} from './localizedLabel';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class LocalizedLabelImpl implements LocalizedLabel {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** Indicates whether the label is the default label. */
    private _isDefault?: boolean | undefined;
    /** The language tag for the label. */
    private _languageTag?: string | undefined;
    /** The name of the label. */
    private _name?: string | undefined;
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
     * Instantiates a new localizedLabel and sets the default values.
     * @param localizedLabelParameterValue 
     */
    public constructor(localizedLabelParameterValue?: LocalizedLabel | undefined) {
        this._additionalData = localizedLabelParameterValue?.additionalData ? localizedLabelParameterValue?.additionalData! : {};
        this._isDefault = localizedLabelParameterValue?.isDefault;
        this._languageTag = localizedLabelParameterValue?.languageTag;
        this._name = localizedLabelParameterValue?.name;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "isDefault": n => { this.isDefault = n.getBooleanValue(); },
            "languageTag": n => { this.languageTag = n.getStringValue(); },
            "name": n => { this.name = n.getStringValue(); },
        };
    };
    /**
     * Gets the isDefault property value. Indicates whether the label is the default label.
     * @returns a boolean
     */
    public get isDefault() {
        return this._isDefault;
    };
    /**
     * Sets the isDefault property value. Indicates whether the label is the default label.
     * @param value Value to set for the isDefault property.
     */
    public set isDefault(value: boolean | undefined) {
        if(value) {
            this._isDefault = value;
        }
    };
    /**
     * Gets the languageTag property value. The language tag for the label.
     * @returns a string
     */
    public get languageTag() {
        return this._languageTag;
    };
    /**
     * Sets the languageTag property value. The language tag for the label.
     * @param value Value to set for the languageTag property.
     */
    public set languageTag(value: string | undefined) {
        if(value) {
            this._languageTag = value;
        }
    };
    /**
     * Gets the name property value. The name of the label.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. The name of the label.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        if(value) {
            this._name = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.isDefault){
            writer.writeBooleanValue("isDefault", this.isDefault);
        }
        if(this.languageTag){
            writer.writeStringValue("languageTag", this.languageTag);
        }
        if(this.name){
            writer.writeStringValue("name", this.name);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
