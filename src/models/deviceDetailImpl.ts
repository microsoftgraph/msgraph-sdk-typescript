import {DeviceDetail} from './deviceDetail';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceDetailImpl implements AdditionalDataHolder, DeviceDetail, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Indicates the browser information of the used for signing-in. */
    public browser?: string | undefined;
    /** Refers to the UniqueID of the device used for signing-in. */
    public deviceId?: string | undefined;
    /** Refers to the name of the device used for signing-in. */
    public displayName?: string | undefined;
    /** Indicates whether the device is compliant or not. */
    public isCompliant?: boolean | undefined;
    /** Indicates if the device is managed or not. */
    public isManaged?: boolean | undefined;
    /** Indicates the OS name and version used for signing-in. */
    public operatingSystem?: string | undefined;
    /** Indicates information on whether the signed-in device is Workplace Joined, AzureAD Joined, Domain Joined. */
    public trustType?: string | undefined;
    /**
     * Instantiates a new deviceDetail and sets the default values.
     * @param deviceDetailParameterValue 
     */
    public constructor(deviceDetailParameterValue?: DeviceDetail | undefined) {
        this.additionalData = deviceDetailParameterValue?.additionalData ? deviceDetailParameterValue?.additionalData! : {}
        this.browser = deviceDetailParameterValue?.browser ;
        this.deviceId = deviceDetailParameterValue?.deviceId ;
        this.displayName = deviceDetailParameterValue?.displayName ;
        this.isCompliant = deviceDetailParameterValue?.isCompliant ;
        this.isManaged = deviceDetailParameterValue?.isManaged ;
        this.operatingSystem = deviceDetailParameterValue?.operatingSystem ;
        this.trustType = deviceDetailParameterValue?.trustType ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "browser": n => { this.browser = n.getStringValue(); },
            "deviceId": n => { this.deviceId = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "isCompliant": n => { this.isCompliant = n.getBooleanValue(); },
            "isManaged": n => { this.isManaged = n.getBooleanValue(); },
            "operatingSystem": n => { this.operatingSystem = n.getStringValue(); },
            "trustType": n => { this.trustType = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.browser){
        writer.writeStringValue("browser", this.browser);
        }
        if(this.deviceId){
        writer.writeStringValue("deviceId", this.deviceId);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.isCompliant){
        writer.writeBooleanValue("isCompliant", this.isCompliant);
        }
        if(this.isManaged){
        writer.writeBooleanValue("isManaged", this.isManaged);
        }
        if(this.operatingSystem){
        writer.writeStringValue("operatingSystem", this.operatingSystem);
        }
        if(this.trustType){
        writer.writeStringValue("trustType", this.trustType);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
