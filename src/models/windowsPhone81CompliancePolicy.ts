import {DeviceCompliancePolicy} from './index';
import {RequiredPasswordType} from './requiredPasswordType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WindowsPhone81CompliancePolicy extends DeviceCompliancePolicy implements Parsable {
    /** Maximum Windows Phone version. */
    private _osMaximumVersion?: string | undefined;
    /** Minimum Windows Phone version. */
    private _osMinimumVersion?: string | undefined;
    /** Whether or not to block syncing the calendar. */
    private _passwordBlockSimple?: boolean | undefined;
    /** Number of days before the password expires. */
    private _passwordExpirationDays?: number | undefined;
    /** The number of character sets required in the password. */
    private _passwordMinimumCharacterSetCount?: number | undefined;
    /** Minimum length of passwords. */
    private _passwordMinimumLength?: number | undefined;
    /** Minutes of inactivity before a password is required. */
    private _passwordMinutesOfInactivityBeforeLock?: number | undefined;
    /** Number of previous passwords to block. Valid values 0 to 24 */
    private _passwordPreviousPasswordBlockCount?: number | undefined;
    /** Whether or not to require a password. */
    private _passwordRequired?: boolean | undefined;
    /** The required password type. Possible values are: deviceDefault, alphanumeric, numeric. */
    private _passwordRequiredType?: RequiredPasswordType | undefined;
    /** Require encryption on windows phone devices. */
    private _storageRequireEncryption?: boolean | undefined;
    /**
     * Instantiates a new WindowsPhone81CompliancePolicy and sets the default values.
     */
    public constructor() {
        super();
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
     * Gets the osMaximumVersion property value. Maximum Windows Phone version.
     * @returns a string
     */
    public get osMaximumVersion() {
        return this._osMaximumVersion;
    };
    /**
     * Sets the osMaximumVersion property value. Maximum Windows Phone version.
     * @param value Value to set for the osMaximumVersion property.
     */
    public set osMaximumVersion(value: string | undefined) {
        this._osMaximumVersion = value;
    };
    /**
     * Gets the osMinimumVersion property value. Minimum Windows Phone version.
     * @returns a string
     */
    public get osMinimumVersion() {
        return this._osMinimumVersion;
    };
    /**
     * Sets the osMinimumVersion property value. Minimum Windows Phone version.
     * @param value Value to set for the osMinimumVersion property.
     */
    public set osMinimumVersion(value: string | undefined) {
        this._osMinimumVersion = value;
    };
    /**
     * Gets the passwordBlockSimple property value. Whether or not to block syncing the calendar.
     * @returns a boolean
     */
    public get passwordBlockSimple() {
        return this._passwordBlockSimple;
    };
    /**
     * Sets the passwordBlockSimple property value. Whether or not to block syncing the calendar.
     * @param value Value to set for the passwordBlockSimple property.
     */
    public set passwordBlockSimple(value: boolean | undefined) {
        this._passwordBlockSimple = value;
    };
    /**
     * Gets the passwordExpirationDays property value. Number of days before the password expires.
     * @returns a integer
     */
    public get passwordExpirationDays() {
        return this._passwordExpirationDays;
    };
    /**
     * Sets the passwordExpirationDays property value. Number of days before the password expires.
     * @param value Value to set for the passwordExpirationDays property.
     */
    public set passwordExpirationDays(value: number | undefined) {
        this._passwordExpirationDays = value;
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
        this._passwordMinimumCharacterSetCount = value;
    };
    /**
     * Gets the passwordMinimumLength property value. Minimum length of passwords.
     * @returns a integer
     */
    public get passwordMinimumLength() {
        return this._passwordMinimumLength;
    };
    /**
     * Sets the passwordMinimumLength property value. Minimum length of passwords.
     * @param value Value to set for the passwordMinimumLength property.
     */
    public set passwordMinimumLength(value: number | undefined) {
        this._passwordMinimumLength = value;
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
        this._passwordMinutesOfInactivityBeforeLock = value;
    };
    /**
     * Gets the passwordPreviousPasswordBlockCount property value. Number of previous passwords to block. Valid values 0 to 24
     * @returns a integer
     */
    public get passwordPreviousPasswordBlockCount() {
        return this._passwordPreviousPasswordBlockCount;
    };
    /**
     * Sets the passwordPreviousPasswordBlockCount property value. Number of previous passwords to block. Valid values 0 to 24
     * @param value Value to set for the passwordPreviousPasswordBlockCount property.
     */
    public set passwordPreviousPasswordBlockCount(value: number | undefined) {
        this._passwordPreviousPasswordBlockCount = value;
    };
    /**
     * Gets the passwordRequired property value. Whether or not to require a password.
     * @returns a boolean
     */
    public get passwordRequired() {
        return this._passwordRequired;
    };
    /**
     * Sets the passwordRequired property value. Whether or not to require a password.
     * @param value Value to set for the passwordRequired property.
     */
    public set passwordRequired(value: boolean | undefined) {
        this._passwordRequired = value;
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
        this._passwordRequiredType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("osMaximumVersion", this.osMaximumVersion);
        writer.writeStringValue("osMinimumVersion", this.osMinimumVersion);
        writer.writeBooleanValue("passwordBlockSimple", this.passwordBlockSimple);
        writer.writeNumberValue("passwordExpirationDays", this.passwordExpirationDays);
        writer.writeNumberValue("passwordMinimumCharacterSetCount", this.passwordMinimumCharacterSetCount);
        writer.writeNumberValue("passwordMinimumLength", this.passwordMinimumLength);
        writer.writeNumberValue("passwordMinutesOfInactivityBeforeLock", this.passwordMinutesOfInactivityBeforeLock);
        writer.writeNumberValue("passwordPreviousPasswordBlockCount", this.passwordPreviousPasswordBlockCount);
        writer.writeBooleanValue("passwordRequired", this.passwordRequired);
        writer.writeEnumValue<RequiredPasswordType>("passwordRequiredType", this.passwordRequiredType);
        writer.writeBooleanValue("storageRequireEncryption", this.storageRequireEncryption);
    };
    /**
     * Gets the storageRequireEncryption property value. Require encryption on windows phone devices.
     * @returns a boolean
     */
    public get storageRequireEncryption() {
        return this._storageRequireEncryption;
    };
    /**
     * Sets the storageRequireEncryption property value. Require encryption on windows phone devices.
     * @param value Value to set for the storageRequireEncryption property.
     */
    public set storageRequireEncryption(value: boolean | undefined) {
        this._storageRequireEncryption = value;
    };
}
