import {EnrollmentState} from './enrollmentState';
import {EntityImpl} from './index';
import {WindowsAutopilotDeviceIdentity} from './windowsAutopilotDeviceIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** The windowsAutopilotDeviceIdentity resource represents a Windows Autopilot Device. */
export class WindowsAutopilotDeviceIdentityImpl extends EntityImpl implements Parsable, WindowsAutopilotDeviceIdentity {
    /** Addressable user name. */
    public addressableUserName?: string | undefined;
    /** AAD Device ID - to be deprecated */
    public azureActiveDirectoryDeviceId?: string | undefined;
    /** Display Name */
    public displayName?: string | undefined;
    /** Intune enrollment state of the Windows autopilot device. Possible values are: unknown, enrolled, pendingReset, failed, notContacted, blocked. */
    public enrollmentState?: EnrollmentState | undefined;
    /** Group Tag of the Windows autopilot device. */
    public groupTag?: string | undefined;
    /** Intune Last Contacted Date Time of the Windows autopilot device. */
    public lastContactedDateTime?: Date | undefined;
    /** Managed Device ID */
    public managedDeviceId?: string | undefined;
    /** Oem manufacturer of the Windows autopilot device. */
    public manufacturer?: string | undefined;
    /** Model name of the Windows autopilot device. */
    public model?: string | undefined;
    /** Product Key of the Windows autopilot device. */
    public productKey?: string | undefined;
    /** Purchase Order Identifier of the Windows autopilot device. */
    public purchaseOrderIdentifier?: string | undefined;
    /** Resource Name. */
    public resourceName?: string | undefined;
    /** Serial number of the Windows autopilot device. */
    public serialNumber?: string | undefined;
    /** SKU Number */
    public skuNumber?: string | undefined;
    /** System Family */
    public systemFamily?: string | undefined;
    /** User Principal Name. */
    public userPrincipalName?: string | undefined;
    /**
     * Instantiates a new windowsAutopilotDeviceIdentity and sets the default values.
     * @param windowsAutopilotDeviceIdentityParameterValue 
     */
    public constructor(windowsAutopilotDeviceIdentityParameterValue?: WindowsAutopilotDeviceIdentity | undefined) {
        super();
        this.addressableUserName = windowsAutopilotDeviceIdentityParameterValue?.addressableUserName ;
        this.azureActiveDirectoryDeviceId = windowsAutopilotDeviceIdentityParameterValue?.azureActiveDirectoryDeviceId ;
        this.displayName = windowsAutopilotDeviceIdentityParameterValue?.displayName ;
        this.enrollmentState = windowsAutopilotDeviceIdentityParameterValue?.enrollmentState ;
        this.groupTag = windowsAutopilotDeviceIdentityParameterValue?.groupTag ;
        this.lastContactedDateTime = windowsAutopilotDeviceIdentityParameterValue?.lastContactedDateTime ;
        this.managedDeviceId = windowsAutopilotDeviceIdentityParameterValue?.managedDeviceId ;
        this.manufacturer = windowsAutopilotDeviceIdentityParameterValue?.manufacturer ;
        this.model = windowsAutopilotDeviceIdentityParameterValue?.model ;
        this.productKey = windowsAutopilotDeviceIdentityParameterValue?.productKey ;
        this.purchaseOrderIdentifier = windowsAutopilotDeviceIdentityParameterValue?.purchaseOrderIdentifier ;
        this.resourceName = windowsAutopilotDeviceIdentityParameterValue?.resourceName ;
        this.serialNumber = windowsAutopilotDeviceIdentityParameterValue?.serialNumber ;
        this.skuNumber = windowsAutopilotDeviceIdentityParameterValue?.skuNumber ;
        this.systemFamily = windowsAutopilotDeviceIdentityParameterValue?.systemFamily ;
        this.userPrincipalName = windowsAutopilotDeviceIdentityParameterValue?.userPrincipalName ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "addressableUserName": n => { this.addressableUserName = n.getStringValue(); },
            "azureActiveDirectoryDeviceId": n => { this.azureActiveDirectoryDeviceId = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "enrollmentState": n => { this.enrollmentState = n.getEnumValue<EnrollmentState>(EnrollmentState); },
            "groupTag": n => { this.groupTag = n.getStringValue(); },
            "lastContactedDateTime": n => { this.lastContactedDateTime = n.getDateValue(); },
            "managedDeviceId": n => { this.managedDeviceId = n.getStringValue(); },
            "manufacturer": n => { this.manufacturer = n.getStringValue(); },
            "model": n => { this.model = n.getStringValue(); },
            "productKey": n => { this.productKey = n.getStringValue(); },
            "purchaseOrderIdentifier": n => { this.purchaseOrderIdentifier = n.getStringValue(); },
            "resourceName": n => { this.resourceName = n.getStringValue(); },
            "serialNumber": n => { this.serialNumber = n.getStringValue(); },
            "skuNumber": n => { this.skuNumber = n.getStringValue(); },
            "systemFamily": n => { this.systemFamily = n.getStringValue(); },
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
        if(this.addressableUserName){
        writer.writeStringValue("addressableUserName", this.addressableUserName);
        }
        if(this.azureActiveDirectoryDeviceId){
        writer.writeStringValue("azureActiveDirectoryDeviceId", this.azureActiveDirectoryDeviceId);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.enrollmentState){
        writer.writeEnumValue<EnrollmentState>("enrollmentState", this.enrollmentState);
        }
        if(this.groupTag){
        writer.writeStringValue("groupTag", this.groupTag);
        }
        if(this.lastContactedDateTime){
        writer.writeDateValue("lastContactedDateTime", this.lastContactedDateTime);
        }
        if(this.managedDeviceId){
        writer.writeStringValue("managedDeviceId", this.managedDeviceId);
        }
        if(this.manufacturer){
        writer.writeStringValue("manufacturer", this.manufacturer);
        }
        if(this.model){
        writer.writeStringValue("model", this.model);
        }
        if(this.productKey){
        writer.writeStringValue("productKey", this.productKey);
        }
        if(this.purchaseOrderIdentifier){
        writer.writeStringValue("purchaseOrderIdentifier", this.purchaseOrderIdentifier);
        }
        if(this.resourceName){
        writer.writeStringValue("resourceName", this.resourceName);
        }
        if(this.serialNumber){
        writer.writeStringValue("serialNumber", this.serialNumber);
        }
        if(this.skuNumber){
        writer.writeStringValue("skuNumber", this.skuNumber);
        }
        if(this.systemFamily){
        writer.writeStringValue("systemFamily", this.systemFamily);
        }
        if(this.userPrincipalName){
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
        }
    };
}
