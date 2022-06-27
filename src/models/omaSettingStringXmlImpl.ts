import {OmaSettingImpl} from './index';
import {OmaSettingStringXml} from './omaSettingStringXml';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OmaSettingStringXmlImpl extends OmaSettingImpl implements OmaSettingStringXml {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** File name associated with the Value property (.xml). */
    public fileName?: string | undefined;
    /** Value. (UTF8 encoded byte array) */
    public value?: string | undefined;
    /**
     * Instantiates a new OmaSettingStringXml and sets the default values.
     * @param omaSettingStringXmlParameterValue 
     */
    public constructor(omaSettingStringXmlParameterValue?: OmaSettingStringXml | undefined) {
        super(omaSettingStringXmlParameterValue);
        this.additionalData = omaSettingStringXmlParameterValue?.additionalData ? omaSettingStringXmlParameterValue?.additionalData! : {};
        this.fileName = omaSettingStringXmlParameterValue?.fileName;
        this.value = omaSettingStringXmlParameterValue?.value;
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
