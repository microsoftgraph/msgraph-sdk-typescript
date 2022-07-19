import {Enablement} from './enablement';
import {DeviceEnrollmentConfiguration} from './index';
import {WindowsHelloForBusinessPinUsage} from './windowsHelloForBusinessPinUsage';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceEnrollmentWindowsHelloForBusinessConfiguration extends DeviceEnrollmentConfiguration implements Parsable {
    /** The enhancedBiometricsState property */
    private _enhancedBiometricsState?: Enablement | undefined;
    /** Controls the period of time (in days) that a PIN can be used before the system requires the user to change it. This must be set between 0 and 730, inclusive. If set to 0, the user's PIN will never expire */
    private _pinExpirationInDays?: number | undefined;
    /** Windows Hello for Business pin usage options */
    private _pinLowercaseCharactersUsage?: WindowsHelloForBusinessPinUsage | undefined;
    /** Controls the maximum number of characters allowed for the Windows Hello for Business PIN. This value must be between 4 and 127, inclusive. This value must be greater than or equal to the value set for the minimum PIN. */
    private _pinMaximumLength?: number | undefined;
    /** Controls the minimum number of characters required for the Windows Hello for Business PIN.  This value must be between 4 and 127, inclusive, and less than or equal to the value set for the maximum PIN. */
    private _pinMinimumLength?: number | undefined;
    /** Controls the ability to prevent users from using past PINs. This must be set between 0 and 50, inclusive, and the current PIN of the user is included in that count. If set to 0, previous PINs are not stored. PIN history is not preserved through a PIN reset. */
    private _pinPreviousBlockCount?: number | undefined;
    /** Windows Hello for Business pin usage options */
    private _pinSpecialCharactersUsage?: WindowsHelloForBusinessPinUsage | undefined;
    /** Windows Hello for Business pin usage options */
    private _pinUppercaseCharactersUsage?: WindowsHelloForBusinessPinUsage | undefined;
    /** Controls the use of Remote Windows Hello for Business. Remote Windows Hello for Business provides the ability for a portable, registered device to be usable as a companion for desktop authentication. The desktop must be Azure AD joined and the companion device must have a Windows Hello for Business PIN. */
    private _remotePassportEnabled?: boolean | undefined;
    /** Controls whether to require a Trusted Platform Module (TPM) for provisioning Windows Hello for Business. A TPM provides an additional security benefit in that data stored on it cannot be used on other devices. If set to False, all devices can provision Windows Hello for Business even if there is not a usable TPM. */
    private _securityDeviceRequired?: boolean | undefined;
    /** The state property */
    private _state?: Enablement | undefined;
    /** Controls the use of biometric gestures, such as face and fingerprint, as an alternative to the Windows Hello for Business PIN.  If set to False, biometric gestures are not allowed. Users must still configure a PIN as a backup in case of failures. */
    private _unlockWithBiometricsEnabled?: boolean | undefined;
    /**
     * Instantiates a new DeviceEnrollmentWindowsHelloForBusinessConfiguration and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.deviceEnrollmentWindowsHelloForBusinessConfiguration";
    };
    /**
     * Gets the enhancedBiometricsState property value. The enhancedBiometricsState property
     * @returns a enablement
     */
    public get enhancedBiometricsState() {
        return this._enhancedBiometricsState;
    };
    /**
     * Sets the enhancedBiometricsState property value. The enhancedBiometricsState property
     * @param value Value to set for the enhancedBiometricsState property.
     */
    public set enhancedBiometricsState(value: Enablement | undefined) {
        this._enhancedBiometricsState = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "enhancedBiometricsState": n => { this.enhancedBiometricsState = n.getEnumValue<Enablement>(Enablement); },
            "pinExpirationInDays": n => { this.pinExpirationInDays = n.getNumberValue(); },
            "pinLowercaseCharactersUsage": n => { this.pinLowercaseCharactersUsage = n.getEnumValue<WindowsHelloForBusinessPinUsage>(WindowsHelloForBusinessPinUsage); },
            "pinMaximumLength": n => { this.pinMaximumLength = n.getNumberValue(); },
            "pinMinimumLength": n => { this.pinMinimumLength = n.getNumberValue(); },
            "pinPreviousBlockCount": n => { this.pinPreviousBlockCount = n.getNumberValue(); },
            "pinSpecialCharactersUsage": n => { this.pinSpecialCharactersUsage = n.getEnumValue<WindowsHelloForBusinessPinUsage>(WindowsHelloForBusinessPinUsage); },
            "pinUppercaseCharactersUsage": n => { this.pinUppercaseCharactersUsage = n.getEnumValue<WindowsHelloForBusinessPinUsage>(WindowsHelloForBusinessPinUsage); },
            "remotePassportEnabled": n => { this.remotePassportEnabled = n.getBooleanValue(); },
            "securityDeviceRequired": n => { this.securityDeviceRequired = n.getBooleanValue(); },
            "state": n => { this.state = n.getEnumValue<Enablement>(Enablement); },
            "unlockWithBiometricsEnabled": n => { this.unlockWithBiometricsEnabled = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the pinExpirationInDays property value. Controls the period of time (in days) that a PIN can be used before the system requires the user to change it. This must be set between 0 and 730, inclusive. If set to 0, the user's PIN will never expire
     * @returns a integer
     */
    public get pinExpirationInDays() {
        return this._pinExpirationInDays;
    };
    /**
     * Sets the pinExpirationInDays property value. Controls the period of time (in days) that a PIN can be used before the system requires the user to change it. This must be set between 0 and 730, inclusive. If set to 0, the user's PIN will never expire
     * @param value Value to set for the pinExpirationInDays property.
     */
    public set pinExpirationInDays(value: number | undefined) {
        this._pinExpirationInDays = value;
    };
    /**
     * Gets the pinLowercaseCharactersUsage property value. Windows Hello for Business pin usage options
     * @returns a windowsHelloForBusinessPinUsage
     */
    public get pinLowercaseCharactersUsage() {
        return this._pinLowercaseCharactersUsage;
    };
    /**
     * Sets the pinLowercaseCharactersUsage property value. Windows Hello for Business pin usage options
     * @param value Value to set for the pinLowercaseCharactersUsage property.
     */
    public set pinLowercaseCharactersUsage(value: WindowsHelloForBusinessPinUsage | undefined) {
        this._pinLowercaseCharactersUsage = value;
    };
    /**
     * Gets the pinMaximumLength property value. Controls the maximum number of characters allowed for the Windows Hello for Business PIN. This value must be between 4 and 127, inclusive. This value must be greater than or equal to the value set for the minimum PIN.
     * @returns a integer
     */
    public get pinMaximumLength() {
        return this._pinMaximumLength;
    };
    /**
     * Sets the pinMaximumLength property value. Controls the maximum number of characters allowed for the Windows Hello for Business PIN. This value must be between 4 and 127, inclusive. This value must be greater than or equal to the value set for the minimum PIN.
     * @param value Value to set for the pinMaximumLength property.
     */
    public set pinMaximumLength(value: number | undefined) {
        this._pinMaximumLength = value;
    };
    /**
     * Gets the pinMinimumLength property value. Controls the minimum number of characters required for the Windows Hello for Business PIN.  This value must be between 4 and 127, inclusive, and less than or equal to the value set for the maximum PIN.
     * @returns a integer
     */
    public get pinMinimumLength() {
        return this._pinMinimumLength;
    };
    /**
     * Sets the pinMinimumLength property value. Controls the minimum number of characters required for the Windows Hello for Business PIN.  This value must be between 4 and 127, inclusive, and less than or equal to the value set for the maximum PIN.
     * @param value Value to set for the pinMinimumLength property.
     */
    public set pinMinimumLength(value: number | undefined) {
        this._pinMinimumLength = value;
    };
    /**
     * Gets the pinPreviousBlockCount property value. Controls the ability to prevent users from using past PINs. This must be set between 0 and 50, inclusive, and the current PIN of the user is included in that count. If set to 0, previous PINs are not stored. PIN history is not preserved through a PIN reset.
     * @returns a integer
     */
    public get pinPreviousBlockCount() {
        return this._pinPreviousBlockCount;
    };
    /**
     * Sets the pinPreviousBlockCount property value. Controls the ability to prevent users from using past PINs. This must be set between 0 and 50, inclusive, and the current PIN of the user is included in that count. If set to 0, previous PINs are not stored. PIN history is not preserved through a PIN reset.
     * @param value Value to set for the pinPreviousBlockCount property.
     */
    public set pinPreviousBlockCount(value: number | undefined) {
        this._pinPreviousBlockCount = value;
    };
    /**
     * Gets the pinSpecialCharactersUsage property value. Windows Hello for Business pin usage options
     * @returns a windowsHelloForBusinessPinUsage
     */
    public get pinSpecialCharactersUsage() {
        return this._pinSpecialCharactersUsage;
    };
    /**
     * Sets the pinSpecialCharactersUsage property value. Windows Hello for Business pin usage options
     * @param value Value to set for the pinSpecialCharactersUsage property.
     */
    public set pinSpecialCharactersUsage(value: WindowsHelloForBusinessPinUsage | undefined) {
        this._pinSpecialCharactersUsage = value;
    };
    /**
     * Gets the pinUppercaseCharactersUsage property value. Windows Hello for Business pin usage options
     * @returns a windowsHelloForBusinessPinUsage
     */
    public get pinUppercaseCharactersUsage() {
        return this._pinUppercaseCharactersUsage;
    };
    /**
     * Sets the pinUppercaseCharactersUsage property value. Windows Hello for Business pin usage options
     * @param value Value to set for the pinUppercaseCharactersUsage property.
     */
    public set pinUppercaseCharactersUsage(value: WindowsHelloForBusinessPinUsage | undefined) {
        this._pinUppercaseCharactersUsage = value;
    };
    /**
     * Gets the remotePassportEnabled property value. Controls the use of Remote Windows Hello for Business. Remote Windows Hello for Business provides the ability for a portable, registered device to be usable as a companion for desktop authentication. The desktop must be Azure AD joined and the companion device must have a Windows Hello for Business PIN.
     * @returns a boolean
     */
    public get remotePassportEnabled() {
        return this._remotePassportEnabled;
    };
    /**
     * Sets the remotePassportEnabled property value. Controls the use of Remote Windows Hello for Business. Remote Windows Hello for Business provides the ability for a portable, registered device to be usable as a companion for desktop authentication. The desktop must be Azure AD joined and the companion device must have a Windows Hello for Business PIN.
     * @param value Value to set for the remotePassportEnabled property.
     */
    public set remotePassportEnabled(value: boolean | undefined) {
        this._remotePassportEnabled = value;
    };
    /**
     * Gets the securityDeviceRequired property value. Controls whether to require a Trusted Platform Module (TPM) for provisioning Windows Hello for Business. A TPM provides an additional security benefit in that data stored on it cannot be used on other devices. If set to False, all devices can provision Windows Hello for Business even if there is not a usable TPM.
     * @returns a boolean
     */
    public get securityDeviceRequired() {
        return this._securityDeviceRequired;
    };
    /**
     * Sets the securityDeviceRequired property value. Controls whether to require a Trusted Platform Module (TPM) for provisioning Windows Hello for Business. A TPM provides an additional security benefit in that data stored on it cannot be used on other devices. If set to False, all devices can provision Windows Hello for Business even if there is not a usable TPM.
     * @param value Value to set for the securityDeviceRequired property.
     */
    public set securityDeviceRequired(value: boolean | undefined) {
        this._securityDeviceRequired = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<Enablement>("enhancedBiometricsState", this.enhancedBiometricsState);
        writer.writeNumberValue("pinExpirationInDays", this.pinExpirationInDays);
        writer.writeEnumValue<WindowsHelloForBusinessPinUsage>("pinLowercaseCharactersUsage", this.pinLowercaseCharactersUsage);
        writer.writeNumberValue("pinMaximumLength", this.pinMaximumLength);
        writer.writeNumberValue("pinMinimumLength", this.pinMinimumLength);
        writer.writeNumberValue("pinPreviousBlockCount", this.pinPreviousBlockCount);
        writer.writeEnumValue<WindowsHelloForBusinessPinUsage>("pinSpecialCharactersUsage", this.pinSpecialCharactersUsage);
        writer.writeEnumValue<WindowsHelloForBusinessPinUsage>("pinUppercaseCharactersUsage", this.pinUppercaseCharactersUsage);
        writer.writeBooleanValue("remotePassportEnabled", this.remotePassportEnabled);
        writer.writeBooleanValue("securityDeviceRequired", this.securityDeviceRequired);
        writer.writeEnumValue<Enablement>("state", this.state);
        writer.writeBooleanValue("unlockWithBiometricsEnabled", this.unlockWithBiometricsEnabled);
    };
    /**
     * Gets the state property value. The state property
     * @returns a enablement
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. The state property
     * @param value Value to set for the state property.
     */
    public set state(value: Enablement | undefined) {
        this._state = value;
    };
    /**
     * Gets the unlockWithBiometricsEnabled property value. Controls the use of biometric gestures, such as face and fingerprint, as an alternative to the Windows Hello for Business PIN.  If set to False, biometric gestures are not allowed. Users must still configure a PIN as a backup in case of failures.
     * @returns a boolean
     */
    public get unlockWithBiometricsEnabled() {
        return this._unlockWithBiometricsEnabled;
    };
    /**
     * Sets the unlockWithBiometricsEnabled property value. Controls the use of biometric gestures, such as face and fingerprint, as an alternative to the Windows Hello for Business PIN.  If set to False, biometric gestures are not allowed. Users must still configure a PIN as a backup in case of failures.
     * @param value Value to set for the unlockWithBiometricsEnabled property.
     */
    public set unlockWithBiometricsEnabled(value: boolean | undefined) {
        this._unlockWithBiometricsEnabled = value;
    };
}
