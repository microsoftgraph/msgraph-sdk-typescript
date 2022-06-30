import {PrintSettings} from './printSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrintSettingsImpl implements PrintSettings {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Specifies whether document conversion is enabled for the tenant. If document conversion is enabled, Universal Print service will automatically convert documents into a format compatible with the printer (xps to pdf) when needed. */
    private _documentConversionEnabled?: boolean | undefined;
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
     * Instantiates a new printSettings and sets the default values.
     * @param printSettingsParameterValue 
     */
    public constructor(printSettingsParameterValue?: PrintSettings | undefined) {
        this._additionalData = printSettingsParameterValue?.additionalData ? printSettingsParameterValue?.additionalData! : {};
        this._documentConversionEnabled = printSettingsParameterValue?.documentConversionEnabled;
    };
    /**
     * Gets the documentConversionEnabled property value. Specifies whether document conversion is enabled for the tenant. If document conversion is enabled, Universal Print service will automatically convert documents into a format compatible with the printer (xps to pdf) when needed.
     * @returns a boolean
     */
    public get documentConversionEnabled() {
        return this._documentConversionEnabled;
    };
    /**
     * Sets the documentConversionEnabled property value. Specifies whether document conversion is enabled for the tenant. If document conversion is enabled, Universal Print service will automatically convert documents into a format compatible with the printer (xps to pdf) when needed.
     * @param value Value to set for the documentConversionEnabled property.
     */
    public set documentConversionEnabled(value: boolean | undefined) {
        if(value) {
            this._documentConversionEnabled = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "documentConversionEnabled": n => { this.documentConversionEnabled = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.documentConversionEnabled){
            writer.writeBooleanValue("documentConversionEnabled", this.documentConversionEnabled);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
