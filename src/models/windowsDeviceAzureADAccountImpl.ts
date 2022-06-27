import {WindowsDeviceAccountImpl} from './index';
import {WindowsDeviceAzureADAccount} from './windowsDeviceAzureADAccount';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WindowsDeviceAzureADAccountImpl extends WindowsDeviceAccountImpl implements WindowsDeviceAzureADAccount {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Not yet documented */
    public userPrincipalName?: string | undefined;
    /**
     * Instantiates a new WindowsDeviceAzureADAccount and sets the default values.
     * @param windowsDeviceAzureADAccountParameterValue 
     */
    public constructor(windowsDeviceAzureADAccountParameterValue?: WindowsDeviceAzureADAccount | undefined) {
        super(windowsDeviceAzureADAccountParameterValue);
        this.additionalData = windowsDeviceAzureADAccountParameterValue?.additionalData ? windowsDeviceAzureADAccountParameterValue?.additionalData! : {};
        this.userPrincipalName = windowsDeviceAzureADAccountParameterValue?.userPrincipalName;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "userPrincipalName": n => { this.userPrincipalName = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.userPrincipalName){
            writer.writeStringValue("userPrincipalName", this.userPrincipalName);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
