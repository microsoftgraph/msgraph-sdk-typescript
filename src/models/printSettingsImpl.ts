import {PrintSettings} from './printSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrintSettingsImpl implements AdditionalDataHolder, Parsable, PrintSettings {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Specifies whether document conversion is enabled for the tenant. If document conversion is enabled, Universal Print service will automatically convert documents into a format compatible with the printer (xps to pdf) when needed. */
    public documentConversionEnabled?: boolean | undefined;
    /**
     * Instantiates a new printSettings and sets the default values.
     * @param printSettingsParameterValue 
     */
    public constructor(printSettingsParameterValue?: PrintSettings | undefined) {
        this.additionalData = printSettingsParameterValue?.additionalData ? printSettingsParameterValue?.additionalData! : {}
        this.documentConversionEnabled = printSettingsParameterValue?.documentConversionEnabled ;
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
