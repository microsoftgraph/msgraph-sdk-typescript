import {WindowsInformationProtection} from './index';
import {WindowsInformationProtectionPinCharacterRequirements} from './windowsInformationProtectionPinCharacterRequirements';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WindowsInformationProtectionPolicy extends WindowsInformationProtection implements Parsable {
    /** Offline interval before app data is wiped (days) */
    private _daysWithoutContactBeforeUnenroll?: number | undefined;
    /** Enrollment url for the MDM */
    private _mdmEnrollmentUrl?: string | undefined;
    /** Specifies the maximum amount of time (in minutes) allowed after the device is idle that will cause the device to become PIN or password locked.   Range is an integer X where 0 <= X <= 999. */
    private _minutesOfInactivityBeforeDeviceLock?: number | undefined;
    /** Integer value that specifies the number of past PINs that can be associated to a user account that can't be reused. The largest number you can configure for this policy setting is 50. The lowest number you can configure for this policy setting is 0. If this policy is set to 0, then storage of previous PINs is not required. This node was added in Windows 10, version 1511. Default is 0. */
    private _numberOfPastPinsRemembered?: number | undefined;
    /** The number of authentication failures allowed before the device will be wiped. A value of 0 disables device wipe functionality. Range is an integer X where 4 <= X <= 16 for desktop and 0 <= X <= 999 for mobile devices. */
    private _passwordMaximumAttemptCount?: number | undefined;
    /** Integer value specifies the period of time (in days) that a PIN can be used before the system requires the user to change it. The largest number you can configure for this policy setting is 730. The lowest number you can configure for this policy setting is 0. If this policy is set to 0, then the user's PIN will never expire. This node was added in Windows 10, version 1511. Default is 0. */
    private _pinExpirationDays?: number | undefined;
    /** Pin Character Requirements */
    private _pinLowercaseLetters?: WindowsInformationProtectionPinCharacterRequirements | undefined;
    /** Integer value that sets the minimum number of characters required for the PIN. Default value is 4. The lowest number you can configure for this policy setting is 4. The largest number you can configure must be less than the number configured in the Maximum PIN length policy setting or the number 127, whichever is the lowest. */
    private _pinMinimumLength?: number | undefined;
    /** Pin Character Requirements */
    private _pinSpecialCharacters?: WindowsInformationProtectionPinCharacterRequirements | undefined;
    /** Pin Character Requirements */
    private _pinUppercaseLetters?: WindowsInformationProtectionPinCharacterRequirements | undefined;
    /** New property in RS2, pending documentation */
    private _revokeOnMdmHandoffDisabled?: boolean | undefined;
    /** Boolean value that sets Windows Hello for Business as a method for signing into Windows. */
    private _windowsHelloForBusinessBlocked?: boolean | undefined;
    /**
     * Instantiates a new WindowsInformationProtectionPolicy and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.windowsInformationProtectionPolicy";
    };
    /**
     * Gets the daysWithoutContactBeforeUnenroll property value. Offline interval before app data is wiped (days)
     * @returns a integer
     */
    public get daysWithoutContactBeforeUnenroll() {
        return this._daysWithoutContactBeforeUnenroll;
    };
    /**
     * Sets the daysWithoutContactBeforeUnenroll property value. Offline interval before app data is wiped (days)
     * @param value Value to set for the daysWithoutContactBeforeUnenroll property.
     */
    public set daysWithoutContactBeforeUnenroll(value: number | undefined) {
        this._daysWithoutContactBeforeUnenroll = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "daysWithoutContactBeforeUnenroll": n => { this.daysWithoutContactBeforeUnenroll = n.getNumberValue(); },
            "mdmEnrollmentUrl": n => { this.mdmEnrollmentUrl = n.getStringValue(); },
            "minutesOfInactivityBeforeDeviceLock": n => { this.minutesOfInactivityBeforeDeviceLock = n.getNumberValue(); },
            "numberOfPastPinsRemembered": n => { this.numberOfPastPinsRemembered = n.getNumberValue(); },
            "passwordMaximumAttemptCount": n => { this.passwordMaximumAttemptCount = n.getNumberValue(); },
            "pinExpirationDays": n => { this.pinExpirationDays = n.getNumberValue(); },
            "pinLowercaseLetters": n => { this.pinLowercaseLetters = n.getEnumValue<WindowsInformationProtectionPinCharacterRequirements>(WindowsInformationProtectionPinCharacterRequirements); },
            "pinMinimumLength": n => { this.pinMinimumLength = n.getNumberValue(); },
            "pinSpecialCharacters": n => { this.pinSpecialCharacters = n.getEnumValue<WindowsInformationProtectionPinCharacterRequirements>(WindowsInformationProtectionPinCharacterRequirements); },
            "pinUppercaseLetters": n => { this.pinUppercaseLetters = n.getEnumValue<WindowsInformationProtectionPinCharacterRequirements>(WindowsInformationProtectionPinCharacterRequirements); },
            "revokeOnMdmHandoffDisabled": n => { this.revokeOnMdmHandoffDisabled = n.getBooleanValue(); },
            "windowsHelloForBusinessBlocked": n => { this.windowsHelloForBusinessBlocked = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the mdmEnrollmentUrl property value. Enrollment url for the MDM
     * @returns a string
     */
    public get mdmEnrollmentUrl() {
        return this._mdmEnrollmentUrl;
    };
    /**
     * Sets the mdmEnrollmentUrl property value. Enrollment url for the MDM
     * @param value Value to set for the mdmEnrollmentUrl property.
     */
    public set mdmEnrollmentUrl(value: string | undefined) {
        this._mdmEnrollmentUrl = value;
    };
    /**
     * Gets the minutesOfInactivityBeforeDeviceLock property value. Specifies the maximum amount of time (in minutes) allowed after the device is idle that will cause the device to become PIN or password locked.   Range is an integer X where 0 <= X <= 999.
     * @returns a integer
     */
    public get minutesOfInactivityBeforeDeviceLock() {
        return this._minutesOfInactivityBeforeDeviceLock;
    };
    /**
     * Sets the minutesOfInactivityBeforeDeviceLock property value. Specifies the maximum amount of time (in minutes) allowed after the device is idle that will cause the device to become PIN or password locked.   Range is an integer X where 0 <= X <= 999.
     * @param value Value to set for the minutesOfInactivityBeforeDeviceLock property.
     */
    public set minutesOfInactivityBeforeDeviceLock(value: number | undefined) {
        this._minutesOfInactivityBeforeDeviceLock = value;
    };
    /**
     * Gets the numberOfPastPinsRemembered property value. Integer value that specifies the number of past PINs that can be associated to a user account that can't be reused. The largest number you can configure for this policy setting is 50. The lowest number you can configure for this policy setting is 0. If this policy is set to 0, then storage of previous PINs is not required. This node was added in Windows 10, version 1511. Default is 0.
     * @returns a integer
     */
    public get numberOfPastPinsRemembered() {
        return this._numberOfPastPinsRemembered;
    };
    /**
     * Sets the numberOfPastPinsRemembered property value. Integer value that specifies the number of past PINs that can be associated to a user account that can't be reused. The largest number you can configure for this policy setting is 50. The lowest number you can configure for this policy setting is 0. If this policy is set to 0, then storage of previous PINs is not required. This node was added in Windows 10, version 1511. Default is 0.
     * @param value Value to set for the numberOfPastPinsRemembered property.
     */
    public set numberOfPastPinsRemembered(value: number | undefined) {
        this._numberOfPastPinsRemembered = value;
    };
    /**
     * Gets the passwordMaximumAttemptCount property value. The number of authentication failures allowed before the device will be wiped. A value of 0 disables device wipe functionality. Range is an integer X where 4 <= X <= 16 for desktop and 0 <= X <= 999 for mobile devices.
     * @returns a integer
     */
    public get passwordMaximumAttemptCount() {
        return this._passwordMaximumAttemptCount;
    };
    /**
     * Sets the passwordMaximumAttemptCount property value. The number of authentication failures allowed before the device will be wiped. A value of 0 disables device wipe functionality. Range is an integer X where 4 <= X <= 16 for desktop and 0 <= X <= 999 for mobile devices.
     * @param value Value to set for the passwordMaximumAttemptCount property.
     */
    public set passwordMaximumAttemptCount(value: number | undefined) {
        this._passwordMaximumAttemptCount = value;
    };
    /**
     * Gets the pinExpirationDays property value. Integer value specifies the period of time (in days) that a PIN can be used before the system requires the user to change it. The largest number you can configure for this policy setting is 730. The lowest number you can configure for this policy setting is 0. If this policy is set to 0, then the user's PIN will never expire. This node was added in Windows 10, version 1511. Default is 0.
     * @returns a integer
     */
    public get pinExpirationDays() {
        return this._pinExpirationDays;
    };
    /**
     * Sets the pinExpirationDays property value. Integer value specifies the period of time (in days) that a PIN can be used before the system requires the user to change it. The largest number you can configure for this policy setting is 730. The lowest number you can configure for this policy setting is 0. If this policy is set to 0, then the user's PIN will never expire. This node was added in Windows 10, version 1511. Default is 0.
     * @param value Value to set for the pinExpirationDays property.
     */
    public set pinExpirationDays(value: number | undefined) {
        this._pinExpirationDays = value;
    };
    /**
     * Gets the pinLowercaseLetters property value. Pin Character Requirements
     * @returns a windowsInformationProtectionPinCharacterRequirements
     */
    public get pinLowercaseLetters() {
        return this._pinLowercaseLetters;
    };
    /**
     * Sets the pinLowercaseLetters property value. Pin Character Requirements
     * @param value Value to set for the pinLowercaseLetters property.
     */
    public set pinLowercaseLetters(value: WindowsInformationProtectionPinCharacterRequirements | undefined) {
        this._pinLowercaseLetters = value;
    };
    /**
     * Gets the pinMinimumLength property value. Integer value that sets the minimum number of characters required for the PIN. Default value is 4. The lowest number you can configure for this policy setting is 4. The largest number you can configure must be less than the number configured in the Maximum PIN length policy setting or the number 127, whichever is the lowest.
     * @returns a integer
     */
    public get pinMinimumLength() {
        return this._pinMinimumLength;
    };
    /**
     * Sets the pinMinimumLength property value. Integer value that sets the minimum number of characters required for the PIN. Default value is 4. The lowest number you can configure for this policy setting is 4. The largest number you can configure must be less than the number configured in the Maximum PIN length policy setting or the number 127, whichever is the lowest.
     * @param value Value to set for the pinMinimumLength property.
     */
    public set pinMinimumLength(value: number | undefined) {
        this._pinMinimumLength = value;
    };
    /**
     * Gets the pinSpecialCharacters property value. Pin Character Requirements
     * @returns a windowsInformationProtectionPinCharacterRequirements
     */
    public get pinSpecialCharacters() {
        return this._pinSpecialCharacters;
    };
    /**
     * Sets the pinSpecialCharacters property value. Pin Character Requirements
     * @param value Value to set for the pinSpecialCharacters property.
     */
    public set pinSpecialCharacters(value: WindowsInformationProtectionPinCharacterRequirements | undefined) {
        this._pinSpecialCharacters = value;
    };
    /**
     * Gets the pinUppercaseLetters property value. Pin Character Requirements
     * @returns a windowsInformationProtectionPinCharacterRequirements
     */
    public get pinUppercaseLetters() {
        return this._pinUppercaseLetters;
    };
    /**
     * Sets the pinUppercaseLetters property value. Pin Character Requirements
     * @param value Value to set for the pinUppercaseLetters property.
     */
    public set pinUppercaseLetters(value: WindowsInformationProtectionPinCharacterRequirements | undefined) {
        this._pinUppercaseLetters = value;
    };
    /**
     * Gets the revokeOnMdmHandoffDisabled property value. New property in RS2, pending documentation
     * @returns a boolean
     */
    public get revokeOnMdmHandoffDisabled() {
        return this._revokeOnMdmHandoffDisabled;
    };
    /**
     * Sets the revokeOnMdmHandoffDisabled property value. New property in RS2, pending documentation
     * @param value Value to set for the revokeOnMdmHandoffDisabled property.
     */
    public set revokeOnMdmHandoffDisabled(value: boolean | undefined) {
        this._revokeOnMdmHandoffDisabled = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeNumberValue("daysWithoutContactBeforeUnenroll", this.daysWithoutContactBeforeUnenroll);
        writer.writeStringValue("mdmEnrollmentUrl", this.mdmEnrollmentUrl);
        writer.writeNumberValue("minutesOfInactivityBeforeDeviceLock", this.minutesOfInactivityBeforeDeviceLock);
        writer.writeNumberValue("numberOfPastPinsRemembered", this.numberOfPastPinsRemembered);
        writer.writeNumberValue("passwordMaximumAttemptCount", this.passwordMaximumAttemptCount);
        writer.writeNumberValue("pinExpirationDays", this.pinExpirationDays);
        writer.writeEnumValue<WindowsInformationProtectionPinCharacterRequirements>("pinLowercaseLetters", this.pinLowercaseLetters);
        writer.writeNumberValue("pinMinimumLength", this.pinMinimumLength);
        writer.writeEnumValue<WindowsInformationProtectionPinCharacterRequirements>("pinSpecialCharacters", this.pinSpecialCharacters);
        writer.writeEnumValue<WindowsInformationProtectionPinCharacterRequirements>("pinUppercaseLetters", this.pinUppercaseLetters);
        writer.writeBooleanValue("revokeOnMdmHandoffDisabled", this.revokeOnMdmHandoffDisabled);
        writer.writeBooleanValue("windowsHelloForBusinessBlocked", this.windowsHelloForBusinessBlocked);
    };
    /**
     * Gets the windowsHelloForBusinessBlocked property value. Boolean value that sets Windows Hello for Business as a method for signing into Windows.
     * @returns a boolean
     */
    public get windowsHelloForBusinessBlocked() {
        return this._windowsHelloForBusinessBlocked;
    };
    /**
     * Sets the windowsHelloForBusinessBlocked property value. Boolean value that sets Windows Hello for Business as a method for signing into Windows.
     * @param value Value to set for the windowsHelloForBusinessBlocked property.
     */
    public set windowsHelloForBusinessBlocked(value: boolean | undefined) {
        this._windowsHelloForBusinessBlocked = value;
    };
}
