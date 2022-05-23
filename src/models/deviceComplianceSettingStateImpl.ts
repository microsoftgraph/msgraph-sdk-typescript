import {ComplianceStatus} from './complianceStatus';
import {DeviceComplianceSettingState} from './deviceComplianceSettingState';
import {EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Device compliance setting State for a given device. */
export class DeviceComplianceSettingStateImpl extends EntityImpl implements DeviceComplianceSettingState, Parsable {
    /** The DateTime when device compliance grace period expires */
    public complianceGracePeriodExpirationDateTime?: Date | undefined;
    /** The Device Id that is being reported */
    public deviceId?: string | undefined;
    /** The device model that is being reported */
    public deviceModel?: string | undefined;
    /** The Device Name that is being reported */
    public deviceName?: string | undefined;
    /** The setting class name and property name. */
    public setting?: string | undefined;
    /** The Setting Name that is being reported */
    public settingName?: string | undefined;
    /** The compliance state of the setting. Possible values are: unknown, notApplicable, compliant, remediated, nonCompliant, error, conflict, notAssigned. */
    public state?: ComplianceStatus | undefined;
    /** The User email address that is being reported */
    public userEmail?: string | undefined;
    /** The user Id that is being reported */
    public userId?: string | undefined;
    /** The User Name that is being reported */
    public userName?: string | undefined;
    /** The User PrincipalName that is being reported */
    public userPrincipalName?: string | undefined;
    /**
     * Instantiates a new deviceComplianceSettingState and sets the default values.
     * @param deviceComplianceSettingStateParameterValue 
     */
    public constructor(deviceComplianceSettingStateParameterValue?: DeviceComplianceSettingState | undefined) {
        super();
        this.complianceGracePeriodExpirationDateTime = deviceComplianceSettingStateParameterValue?.complianceGracePeriodExpirationDateTime ;
        this.deviceId = deviceComplianceSettingStateParameterValue?.deviceId ;
        this.deviceModel = deviceComplianceSettingStateParameterValue?.deviceModel ;
        this.deviceName = deviceComplianceSettingStateParameterValue?.deviceName ;
        this.setting = deviceComplianceSettingStateParameterValue?.setting ;
        this.settingName = deviceComplianceSettingStateParameterValue?.settingName ;
        this.state = deviceComplianceSettingStateParameterValue?.state ;
        this.userEmail = deviceComplianceSettingStateParameterValue?.userEmail ;
        this.userId = deviceComplianceSettingStateParameterValue?.userId ;
        this.userName = deviceComplianceSettingStateParameterValue?.userName ;
        this.userPrincipalName = deviceComplianceSettingStateParameterValue?.userPrincipalName ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "complianceGracePeriodExpirationDateTime": n => { this.complianceGracePeriodExpirationDateTime = n.getDateValue(); },
            "deviceId": n => { this.deviceId = n.getStringValue(); },
            "deviceModel": n => { this.deviceModel = n.getStringValue(); },
            "deviceName": n => { this.deviceName = n.getStringValue(); },
            "setting": n => { this.setting = n.getStringValue(); },
            "settingName": n => { this.settingName = n.getStringValue(); },
            "state": n => { this.state = n.getEnumValue<ComplianceStatus>(ComplianceStatus); },
            "userEmail": n => { this.userEmail = n.getStringValue(); },
            "userId": n => { this.userId = n.getStringValue(); },
            "userName": n => { this.userName = n.getStringValue(); },
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
        if(this.complianceGracePeriodExpirationDateTime){
        writer.writeDateValue("complianceGracePeriodExpirationDateTime", this.complianceGracePeriodExpirationDateTime);
        }
        if(this.deviceId){
        writer.writeStringValue("deviceId", this.deviceId);
        }
        if(this.deviceModel){
        writer.writeStringValue("deviceModel", this.deviceModel);
        }
        if(this.deviceName){
        writer.writeStringValue("deviceName", this.deviceName);
        }
        if(this.setting){
        writer.writeStringValue("setting", this.setting);
        }
        if(this.settingName){
        writer.writeStringValue("settingName", this.settingName);
        }
        if(this.state){
        writer.writeEnumValue<ComplianceStatus>("state", this.state);
        }
        if(this.userEmail){
        writer.writeStringValue("userEmail", this.userEmail);
        }
        if(this.userId){
        writer.writeStringValue("userId", this.userId);
        }
        if(this.userName){
        writer.writeStringValue("userName", this.userName);
        }
        if(this.userPrincipalName){
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
        }
    };
}
