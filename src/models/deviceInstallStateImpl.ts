import {DeviceInstallState} from './deviceInstallState';
import {EntityImpl} from './index';
import {InstallState} from './installState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Contains properties for the installation state for a device. */
export class DeviceInstallStateImpl extends EntityImpl implements DeviceInstallState, Parsable {
    /** Device Id. */
    public deviceId?: string | undefined;
    /** Device name. */
    public deviceName?: string | undefined;
    /** The error code for install failures. */
    public errorCode?: string | undefined;
    /** The install state of the eBook. Possible values are: notApplicable, installed, failed, notInstalled, uninstallFailed, unknown. */
    public installState?: InstallState | undefined;
    /** Last sync date and time. */
    public lastSyncDateTime?: Date | undefined;
    /** OS Description. */
    public osDescription?: string | undefined;
    /** OS Version. */
    public osVersion?: string | undefined;
    /** Device User Name. */
    public userName?: string | undefined;
    /**
     * Instantiates a new deviceInstallState and sets the default values.
     * @param deviceInstallStateParameterValue 
     */
    public constructor(deviceInstallStateParameterValue?: DeviceInstallState | undefined) {
        super();
        this.deviceId = deviceInstallStateParameterValue?.deviceId ;
        this.deviceName = deviceInstallStateParameterValue?.deviceName ;
        this.errorCode = deviceInstallStateParameterValue?.errorCode ;
        this.installState = deviceInstallStateParameterValue?.installState ;
        this.lastSyncDateTime = deviceInstallStateParameterValue?.lastSyncDateTime ;
        this.osDescription = deviceInstallStateParameterValue?.osDescription ;
        this.osVersion = deviceInstallStateParameterValue?.osVersion ;
        this.userName = deviceInstallStateParameterValue?.userName ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "deviceId": n => { this.deviceId = n.getStringValue(); },
            "deviceName": n => { this.deviceName = n.getStringValue(); },
            "errorCode": n => { this.errorCode = n.getStringValue(); },
            "installState": n => { this.installState = n.getEnumValue<InstallState>(InstallState); },
            "lastSyncDateTime": n => { this.lastSyncDateTime = n.getDateValue(); },
            "osDescription": n => { this.osDescription = n.getStringValue(); },
            "osVersion": n => { this.osVersion = n.getStringValue(); },
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
        if(this.deviceId){
        writer.writeStringValue("deviceId", this.deviceId);
        }
        if(this.deviceName){
        writer.writeStringValue("deviceName", this.deviceName);
        }
        if(this.errorCode){
        writer.writeStringValue("errorCode", this.errorCode);
        }
        if(this.installState){
        writer.writeEnumValue<InstallState>("installState", this.installState);
        }
        if(this.lastSyncDateTime){
        writer.writeDateValue("lastSyncDateTime", this.lastSyncDateTime);
        }
        if(this.osDescription){
        writer.writeStringValue("osDescription", this.osDescription);
        }
        if(this.osVersion){
        writer.writeStringValue("osVersion", this.osVersion);
        }
        if(this.userName){
        writer.writeStringValue("userName", this.userName);
        }
    };
}
