import {DeviceCompliancePolicyImpl} from './index';
import {RequiredPasswordType} from './requiredPasswordType';
import {Windows81CompliancePolicy} from './windows81CompliancePolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Windows81CompliancePolicyImpl extends DeviceCompliancePolicyImpl implements Windows81CompliancePolicy {
    /** Maximum Windows 8.1 version. */
    private _osMaximumVersion?: string | undefined;
    /** Minimum Windows 8.1 version. */
    private _osMinimumVersion?: string | undefined;
    /** Indicates whether or not to block simple password. */
    private _passwordBlockSimple?: boolean | undefined;
    /** Password expiration in days. */
    private _passwordExpirationDays?: number | undefined;
    /** The number of character sets required in the password. */
    private _passwordMinimumCharacterSetCount?: number | undefined;
    /** The minimum password length. */
    private _passwordMinimumLength?: number | undefined;
    /** Minutes of inactivity before a password is required. */
    private _passwordMinutesOfInactivityBeforeLock?: number | undefined;
    /** The number of previous passwords to prevent re-use of. Valid values 0 to 24 */
    private _passwordPreviousPasswordBlockCount?: number | undefined;
    /** Require a password to unlock Windows device. */
    private _passwordRequired?: boolean | undefined;
    /** The required password type. Possible values are: deviceDefault, alphanumeric, numeric. */
    private _passwordRequiredType?: RequiredPasswordType | undefined;
    /** Indicates whether or not to require encryption on a windows 8.1 device. */
    private _storageRequireEncryption?: boolean | undefined;
    /**
     * Instantiates a new Windows81CompliancePolicy and sets the default values.
     * @param windows81CompliancePolicyParameterValue 
     */
    public constructor(windows81CompliancePolicyParameterValue?: Windows81CompliancePolicy | undefined) {
        super(windows81CompliancePolicyParameterValue);
        this._osMaximumVersion = windows81CompliancePolicyParameterValue?.osMaximumVersion;
        this._osMinimumVersion = windows81CompliancePolicyParameterValue?.osMinimumVersion;
        this._passwordBlockSimple = windows81CompliancePolicyParameterValue?.passwordBlockSimple;
        this._passwordExpirationDays = windows81CompliancePolicyParameterValue?.passwordExpirationDays;
        this._passwordMinimumCharacterSetCount = windows81CompliancePolicyParameterValue?.passwordMinimumCharacterSetCount;
        this._passwordMinimumLength = windows81CompliancePolicyParameterValue?.passwordMinimumLength;
        this._passwordMinutesOfInactivityBeforeLock = windows81CompliancePolicyParameterValue?.passwordMinutesOfInactivityBeforeLock;
        this._passwordPreviousPasswordBlockCount = windows81CompliancePolicyParameterValue?.passwordPreviousPasswordBlockCount;
        this._passwordRequired = windows81CompliancePolicyParameterValue?.passwordRequired;
        this._passwordRequiredType = windows81CompliancePolicyParameterValue?.passwordRequiredType;
        this._storageRequireEncryption = windows81CompliancePolicyParameterValue?.storageRequireEncryption;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "osMaximumVersion": n => { this.osMaximumVersion = n.getStringValue(); },
            "osMinimumVersion": n => { this.osMinimumVersion = n.getStringValue(); },
            "passwordBlockSimple": n => { this.passwordBlockSimple = n.getBooleanValue(); },
            "passwordExpirationDays": n => { this.passwordExpirationDays = n.getNumberValue(); },
            "passwordMinimumCharacterSetCount": n => { this.passwordMinimumCharacterSetCount = n.getNumberValue(); },
            "passwordMinimumLength": n => { this.passwordMinimumLength = n.getNumberValue(); },
            "passwordMinutesOfInactivityBeforeLock": n => { this.passwordMinutesOfInactivityBeforeLock = n.getNumberValue(); },
            "passwordPreviousPasswordBlockCount": n => { this.passwordPreviousPasswordBlockCount = n.getNumberValue(); },
            "passwordRequired": n => { this.passwordRequired = n.getBooleanValue(); },
            "passwordRequiredType": n => { this.passwordRequiredType = n.getEnumValue<RequiredPasswordType>(RequiredPasswordType); },
            "storageRequireEncryption": n => { this.storageRequireEncryption = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the osMaximumVersion property value. Maximum Windows 8.1 version.
     * @returns a string
     */
    public get osMaximumVersion() {
        return this._osMaximumVersion;
    };
    /**
     * Sets the osMaximumVersion property value. Maximum Windows 8.1 version.
     * @param value Value to set for the osMaximumVersion property.
     */
    public set osMaximumVersion(value: string | undefined) {
        if(value) {
            this._osMaximumVersion = value;
        }
    };
    /**
     * Gets the osMinimumVersion property value. Minimum Windows 8.1 version.
     * @returns a string
     */
    public get osMinimumVersion() {
        return this._osMinimumVersion;
    };
    /**
     * Sets the osMinimumVersion property value. Minimum Windows 8.1 version.
     * @param value Value to set for the osMinimumVersion property.
     */
    public set osMinimumVersion(value: string | undefined) {
        if(value) {
            this._osMinimumVersion = value;
        }
    };
    /**
     * Gets the passwordBlockSimple property value. Indicates whether or not to block simple password.
     * @returns a boolean
     */
    public get passwordBlockSimple() {
        return this._passwordBlockSimple;
    };
    /**
     * Sets the passwordBlockSimple property value. Indicates whether or not to block simple password.
     * @param value Value to set for the passwordBlockSimple property.
     */
    public set passwordBlockSimple(value: boolean | undefined) {
        if(value) {
            this._passwordBlockSimple = value;
        }
    };
    /**
     * Gets the passwordExpirationDays property value. Password expiration in days.
     * @returns a integer
     */
    public get passwordExpirationDays() {
        return this._passwordExpirationDays;
    };
    /**
     * Sets the passwordExpirationDays property value. Password expiration in days.
     * @param value Value to set for the passwordExpirationDays property.
     */
    public set passwordExpirationDays(value: number | undefined) {
        if(value) {
            this._passwordExpirationDays = value;
        }
    };
    /**
     * Gets the passwordMinimumCharacterSetCount property value. The number of character sets required in the password.
     * @returns a integer
     */
    public get passwordMinimumCharacterSetCount() {
        return this._passwordMinimumCharacterSetCount;
    };
    /**
     * Sets the passwordMinimumCharacterSetCount property value. The number of character sets required in the password.
     * @param value Value to set for the passwordMinimumCharacterSetCount property.
     */
    public set passwordMinimumCharacterSetCount(value: number | undefined) {
        if(value) {
            this._passwordMinimumCharacterSetCount = value;
        }
    };
    /**
     * Gets the passwordMinimumLength property value. The minimum password length.
     * @returns a integer
     */
    public get passwordMinimumLength() {
        return this._passwordMinimumLength;
    };
    /**
     * Sets the passwordMinimumLength property value. The minimum password length.
     * @param value Value to set for the passwordMinimumLength property.
     */
    public set passwordMinimumLength(value: number | undefined) {
        if(value) {
            this._passwordMinimumLength = value;
        }
    };
    /**
     * Gets the passwordMinutesOfInactivityBeforeLock property value. Minutes of inactivity before a password is required.
     * @returns a integer
     */
    public get passwordMinutesOfInactivityBeforeLock() {
        return this._passwordMinutesOfInactivityBeforeLock;
    };
    /**
     * Sets the passwordMinutesOfInactivityBeforeLock property value. Minutes of inactivity before a password is required.
     * @param value Value to set for the passwordMinutesOfInactivityBeforeLock property.
     */
    public set passwordMinutesOfInactivityBeforeLock(value: number | undefined) {
        if(value) {
            this._passwordMinutesOfInactivityBeforeLock = value;
        }
    };
    /**
     * Gets the passwordPreviousPasswordBlockCount property value. The number of previous passwords to prevent re-use of. Valid values 0 to 24
     * @returns a integer
     */
    public get passwordPreviousPasswordBlockCount() {
        return this._passwordPreviousPasswordBlockCount;
    };
    /**
     * Sets the passwordPreviousPasswordBlockCount property value. The number of previous passwords to prevent re-use of. Valid values 0 to 24
     * @param value Value to set for the passwordPreviousPasswordBlockCount property.
     */
    public set passwordPreviousPasswordBlockCount(value: number | undefined) {
        if(value) {
            this._passwordPreviousPasswordBlockCount = value;
        }
    };
    /**
     * Gets the passwordRequired property value. Require a password to unlock Windows device.
     * @returns a boolean
     */
    public get passwordRequired() {
        return this._passwordRequired;
    };
    /**
     * Sets the passwordRequired property value. Require a password to unlock Windows device.
     * @param value Value to set for the passwordRequired property.
     */
    public set passwordRequired(value: boolean | undefined) {
        if(value) {
            this._passwordRequired = value;
        }
    };
    /**
     * Gets the passwordRequiredType property value. The required password type. Possible values are: deviceDefault, alphanumeric, numeric.
     * @returns a requiredPasswordType
     */
    public get passwordRequiredType() {
        return this._passwordRequiredType;
    };
    /**
     * Sets the passwordRequiredType property value. The required password type. Possible values are: deviceDefault, alphanumeric, numeric.
     * @param value Value to set for the passwordRequiredType property.
     */
    public set passwordRequiredType(value: RequiredPasswordType | undefined) {
        if(value) {
            this._passwordRequiredType = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.osMaximumVersion){
            writer.writeStringValue("osMaximumVersion", this.osMaximumVersion);
        }
        if(this.osMinimumVersion){
            writer.writeStringValue("osMinimumVersion", this.osMinimumVersion);
        }
        if(this.passwordBlockSimple){
            writer.writeBooleanValue("passwordBlockSimple", this.passwordBlockSimple);
        }
        if(this.passwordExpirationDays){
            writer.writeNumberValue("passwordExpirationDays", this.passwordExpirationDays);
        }
        if(this.passwordMinimumCharacterSetCount){
            writer.writeNumberValue("passwordMinimumCharacterSetCount", this.passwordMinimumCharacterSetCount);
        }
        if(this.passwordMinimumLength){
            writer.writeNumberValue("passwordMinimumLength", this.passwordMinimumLength);
        }
        if(this.passwordMinutesOfInactivityBeforeLock){
            writer.writeNumberValue("passwordMinutesOfInactivityBeforeLock", this.passwordMinutesOfInactivityBeforeLock);
        }
        if(this.passwordPreviousPasswordBlockCount){
            writer.writeNumberValue("passwordPreviousPasswordBlockCount", this.passwordPreviousPasswordBlockCount);
        }
        if(this.passwordRequired){
            writer.writeBooleanValue("passwordRequired", this.passwordRequired);
        }
        if(this.passwordRequiredType){
            writer.writeEnumValue<RequiredPasswordType>("passwordRequiredType", this.passwordRequiredType);
        }
        if(this.storageRequireEncryption){
            writer.writeBooleanValue("storageRequireEncryption", this.storageRequireEncryption);
        }
    };
    /**
     * Gets the storageRequireEncryption property value. Indicates whether or not to require encryption on a windows 8.1 device.
     * @returns a boolean
     */
    public get storageRequireEncryption() {
        return this._storageRequireEncryption;
    };
    /**
     * Sets the storageRequireEncryption property value. Indicates whether or not to require encryption on a windows 8.1 device.
     * @param value Value to set for the storageRequireEncryption property.
     */
    public set storageRequireEncryption(value: boolean | undefined) {
        if(value) {
            this._storageRequireEncryption = value;
        }
    };
}
