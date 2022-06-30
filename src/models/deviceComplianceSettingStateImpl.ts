import {ComplianceStatus} from './complianceStatus';
import {DeviceComplianceSettingState} from './deviceComplianceSettingState';
import {EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Device compliance setting State for a given device. */
export class DeviceComplianceSettingStateImpl extends EntityImpl implements DeviceComplianceSettingState {
    /** The DateTime when device compliance grace period expires */
    private _complianceGracePeriodExpirationDateTime?: Date | undefined;
    /** The Device Id that is being reported */
    private _deviceId?: string | undefined;
    /** The device model that is being reported */
    private _deviceModel?: string | undefined;
    /** The Device Name that is being reported */
    private _deviceName?: string | undefined;
    /** The setting class name and property name. */
    private _setting?: string | undefined;
    /** The Setting Name that is being reported */
    private _settingName?: string | undefined;
    /** The compliance state of the setting. Possible values are: unknown, notApplicable, compliant, remediated, nonCompliant, error, conflict, notAssigned. */
    private _state?: ComplianceStatus | undefined;
    /** The User email address that is being reported */
    private _userEmail?: string | undefined;
    /** The user Id that is being reported */
    private _userId?: string | undefined;
    /** The User Name that is being reported */
    private _userName?: string | undefined;
    /** The User PrincipalName that is being reported */
    private _userPrincipalName?: string | undefined;
    /**
     * Gets the complianceGracePeriodExpirationDateTime property value. The DateTime when device compliance grace period expires
     * @returns a Date
     */
    public get complianceGracePeriodExpirationDateTime() {
        return this._complianceGracePeriodExpirationDateTime;
    };
    /**
     * Sets the complianceGracePeriodExpirationDateTime property value. The DateTime when device compliance grace period expires
     * @param value Value to set for the complianceGracePeriodExpirationDateTime property.
     */
    public set complianceGracePeriodExpirationDateTime(value: Date | undefined) {
        if(value) {
            this._complianceGracePeriodExpirationDateTime = value;
        }
    };
    /**
     * Instantiates a new deviceComplianceSettingState and sets the default values.
     * @param deviceComplianceSettingStateParameterValue 
     */
    public constructor(deviceComplianceSettingStateParameterValue?: DeviceComplianceSettingState | undefined) {
        super(deviceComplianceSettingStateParameterValue);
        this._complianceGracePeriodExpirationDateTime = deviceComplianceSettingStateParameterValue?.complianceGracePeriodExpirationDateTime;
        this._deviceId = deviceComplianceSettingStateParameterValue?.deviceId;
        this._deviceModel = deviceComplianceSettingStateParameterValue?.deviceModel;
        this._deviceName = deviceComplianceSettingStateParameterValue?.deviceName;
        this._setting = deviceComplianceSettingStateParameterValue?.setting;
        this._settingName = deviceComplianceSettingStateParameterValue?.settingName;
        this._state = deviceComplianceSettingStateParameterValue?.state;
        this._userEmail = deviceComplianceSettingStateParameterValue?.userEmail;
        this._userId = deviceComplianceSettingStateParameterValue?.userId;
        this._userName = deviceComplianceSettingStateParameterValue?.userName;
        this._userPrincipalName = deviceComplianceSettingStateParameterValue?.userPrincipalName;
    };
    /**
     * Gets the deviceId property value. The Device Id that is being reported
     * @returns a string
     */
    public get deviceId() {
        return this._deviceId;
    };
    /**
     * Sets the deviceId property value. The Device Id that is being reported
     * @param value Value to set for the deviceId property.
     */
    public set deviceId(value: string | undefined) {
        if(value) {
            this._deviceId = value;
        }
    };
    /**
     * Gets the deviceModel property value. The device model that is being reported
     * @returns a string
     */
    public get deviceModel() {
        return this._deviceModel;
    };
    /**
     * Sets the deviceModel property value. The device model that is being reported
     * @param value Value to set for the deviceModel property.
     */
    public set deviceModel(value: string | undefined) {
        if(value) {
            this._deviceModel = value;
        }
    };
    /**
     * Gets the deviceName property value. The Device Name that is being reported
     * @returns a string
     */
    public get deviceName() {
        return this._deviceName;
    };
    /**
     * Sets the deviceName property value. The Device Name that is being reported
     * @param value Value to set for the deviceName property.
     */
    public set deviceName(value: string | undefined) {
        if(value) {
            this._deviceName = value;
        }
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
    /**
     * Gets the setting property value. The setting class name and property name.
     * @returns a string
     */
    public get setting() {
        return this._setting;
    };
    /**
     * Sets the setting property value. The setting class name and property name.
     * @param value Value to set for the setting property.
     */
    public set setting(value: string | undefined) {
        if(value) {
            this._setting = value;
        }
    };
    /**
     * Gets the settingName property value. The Setting Name that is being reported
     * @returns a string
     */
    public get settingName() {
        return this._settingName;
    };
    /**
     * Sets the settingName property value. The Setting Name that is being reported
     * @param value Value to set for the settingName property.
     */
    public set settingName(value: string | undefined) {
        if(value) {
            this._settingName = value;
        }
    };
    /**
     * Gets the state property value. The compliance state of the setting. Possible values are: unknown, notApplicable, compliant, remediated, nonCompliant, error, conflict, notAssigned.
     * @returns a complianceStatus
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. The compliance state of the setting. Possible values are: unknown, notApplicable, compliant, remediated, nonCompliant, error, conflict, notAssigned.
     * @param value Value to set for the state property.
     */
    public set state(value: ComplianceStatus | undefined) {
        if(value) {
            this._state = value;
        }
    };
    /**
     * Gets the userEmail property value. The User email address that is being reported
     * @returns a string
     */
    public get userEmail() {
        return this._userEmail;
    };
    /**
     * Sets the userEmail property value. The User email address that is being reported
     * @param value Value to set for the userEmail property.
     */
    public set userEmail(value: string | undefined) {
        if(value) {
            this._userEmail = value;
        }
    };
    /**
     * Gets the userId property value. The user Id that is being reported
     * @returns a string
     */
    public get userId() {
        return this._userId;
    };
    /**
     * Sets the userId property value. The user Id that is being reported
     * @param value Value to set for the userId property.
     */
    public set userId(value: string | undefined) {
        if(value) {
            this._userId = value;
        }
    };
    /**
     * Gets the userName property value. The User Name that is being reported
     * @returns a string
     */
    public get userName() {
        return this._userName;
    };
    /**
     * Sets the userName property value. The User Name that is being reported
     * @param value Value to set for the userName property.
     */
    public set userName(value: string | undefined) {
        if(value) {
            this._userName = value;
        }
    };
    /**
     * Gets the userPrincipalName property value. The User PrincipalName that is being reported
     * @returns a string
     */
    public get userPrincipalName() {
        return this._userPrincipalName;
    };
    /**
     * Sets the userPrincipalName property value. The User PrincipalName that is being reported
     * @param value Value to set for the userPrincipalName property.
     */
    public set userPrincipalName(value: string | undefined) {
        if(value) {
            this._userPrincipalName = value;
        }
    };
}
