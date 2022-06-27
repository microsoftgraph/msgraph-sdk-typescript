import {OmaSettingImpl} from './index';
import {OmaSettingBase64} from './omaSettingBase64';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OmaSettingBase64Impl extends OmaSettingImpl implements OmaSettingBase64 {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** File name associated with the Value property (.cer */
    public fileName?: string | undefined;
    /** Value. (Base64 encoded string) */
    public value?: string | undefined;
    /**
     * Instantiates a new OmaSettingBase64 and sets the default values.
     * @param omaSettingBase64ParameterValue 
     */
    public constructor(omaSettingBase64ParameterValue?: OmaSettingBase64 | undefined) {
        super(omaSettingBase64ParameterValue);
        this.additionalData = omaSettingBase64ParameterValue?.additionalData ? omaSettingBase64ParameterValue?.additionalData! : {};
        this.fileName = omaSettingBase64ParameterValue?.fileName;
        this.value = omaSettingBase64ParameterValue?.value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "fileName": n => { this.fileName = n.getStringValue(); },
            "value": n => { this.value = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.fileName){
            writer.writeStringValue("fileName", this.fileName);
        }
        if(this.value){
            writer.writeStringValue("value", this.value);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
