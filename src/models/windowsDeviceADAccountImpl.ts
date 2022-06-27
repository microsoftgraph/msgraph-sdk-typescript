import {WindowsDeviceAccountImpl} from './index';
import {WindowsDeviceADAccount} from './windowsDeviceADAccount';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WindowsDeviceADAccountImpl extends WindowsDeviceAccountImpl implements WindowsDeviceADAccount {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Not yet documented */
    public domainName?: string | undefined;
    /** Not yet documented */
    public userName?: string | undefined;
    /**
     * Instantiates a new WindowsDeviceADAccount and sets the default values.
     * @param windowsDeviceADAccountParameterValue 
     */
    public constructor(windowsDeviceADAccountParameterValue?: WindowsDeviceADAccount | undefined) {
        super(windowsDeviceADAccountParameterValue);
        this.additionalData = windowsDeviceADAccountParameterValue?.additionalData ? windowsDeviceADAccountParameterValue?.additionalData! : {};
        this.domainName = windowsDeviceADAccountParameterValue?.domainName;
        this.userName = windowsDeviceADAccountParameterValue?.userName;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "domainName": n => { this.domainName = n.getStringValue(); },
            "userName": n => { this.userName = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.domainName){
            writer.writeStringValue("domainName", this.domainName);
        }
        if(this.userName){
            writer.writeStringValue("userName", this.userName);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
