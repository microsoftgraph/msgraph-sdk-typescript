import {LocalizedDescription} from './localizedDescription';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class LocalizedDescriptionImpl implements LocalizedDescription {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The description in the localized language. */
    private _description?: string | undefined;
    /** The language tag for the label. */
    private _languageTag?: string | undefined;
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
     * Instantiates a new localizedDescription and sets the default values.
     * @param localizedDescriptionParameterValue 
     */
    public constructor(localizedDescriptionParameterValue?: LocalizedDescription | undefined) {
        this._additionalData = localizedDescriptionParameterValue?.additionalData ? localizedDescriptionParameterValue?.additionalData! : {};
        this._description = localizedDescriptionParameterValue?.description;
        this._languageTag = localizedDescriptionParameterValue?.languageTag;
    };
    /**
     * Gets the description property value. The description in the localized language.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. The description in the localized language.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        if(value) {
            this._description = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "description": n => { this.description = n.getStringValue(); },
            "languageTag": n => { this.languageTag = n.getStringValue(); },
        };
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.description){
            writer.writeStringValue("description", this.description);
        }
        if(this.languageTag){
            writer.writeStringValue("languageTag", this.languageTag);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
