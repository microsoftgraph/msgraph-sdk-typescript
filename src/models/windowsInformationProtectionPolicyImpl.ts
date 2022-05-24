import {WindowsInformationProtectionImpl} from './index';
import {WindowsInformationProtectionPinCharacterRequirements} from './windowsInformationProtectionPinCharacterRequirements';
import {WindowsInformationProtectionPolicy} from './windowsInformationProtectionPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Policy for Windows information protection without MDM */
export class WindowsInformationProtectionPolicyImpl extends WindowsInformationProtectionImpl implements Parsable, WindowsInformationProtectionPolicy {
    /** Offline interval before app data is wiped (days) */
    public daysWithoutContactBeforeUnenroll?: number | undefined;
    /** Enrollment url for the MDM */
    public mdmEnrollmentUrl?: string | undefined;
    /** Specifies the maximum amount of time (in minutes) allowed after the device is idle that will cause the device to become PIN or password locked.   Range is an integer X where 0 <= X <= 999. */
    public minutesOfInactivityBeforeDeviceLock?: number | undefined;
    /** Integer value that specifies the number of past PINs that can be associated to a user account that can't be reused. The largest number you can configure for this policy setting is 50. The lowest number you can configure for this policy setting is 0. If this policy is set to 0, then storage of previous PINs is not required. This node was added in Windows 10, version 1511. Default is 0. */
    public numberOfPastPinsRemembered?: number | undefined;
    /** The number of authentication failures allowed before the device will be wiped. A value of 0 disables device wipe functionality. Range is an integer X where 4 <= X <= 16 for desktop and 0 <= X <= 999 for mobile devices. */
    public passwordMaximumAttemptCount?: number | undefined;
    /** Integer value specifies the period of time (in days) that a PIN can be used before the system requires the user to change it. The largest number you can configure for this policy setting is 730. The lowest number you can configure for this policy setting is 0. If this policy is set to 0, then the user's PIN will never expire. This node was added in Windows 10, version 1511. Default is 0. */
    public pinExpirationDays?: number | undefined;
    /** Integer value that configures the use of lowercase letters in the Windows Hello for Business PIN. Default is NotAllow. Possible values are: notAllow, requireAtLeastOne, allow. */
    public pinLowercaseLetters?: WindowsInformationProtectionPinCharacterRequirements | undefined;
    /** Integer value that sets the minimum number of characters required for the PIN. Default value is 4. The lowest number you can configure for this policy setting is 4. The largest number you can configure must be less than the number configured in the Maximum PIN length policy setting or the number 127, whichever is the lowest. */
    public pinMinimumLength?: number | undefined;
    /** Integer value that configures the use of special characters in the Windows Hello for Business PIN. Valid special characters for Windows Hello for Business PIN gestures include: ! ' # $ % & ' ( )  + , - . / : ; < = > ? @ [ / ] ^  ` { */
    public pinSpecialCharacters?: WindowsInformationProtectionPinCharacterRequirements | undefined;
    /** Integer value that configures the use of uppercase letters in the Windows Hello for Business PIN. Default is NotAllow. Possible values are: notAllow, requireAtLeastOne, allow. */
    public pinUppercaseLetters?: WindowsInformationProtectionPinCharacterRequirements | undefined;
    /** New property in RS2, pending documentation */
    public revokeOnMdmHandoffDisabled?: boolean | undefined;
    /** Boolean value that sets Windows Hello for Business as a method for signing into Windows. */
    public windowsHelloForBusinessBlocked?: boolean | undefined;
    /**
     * Instantiates a new windowsInformationProtectionPolicy and sets the default values.
     * @param windowsInformationProtectionPolicyParameterValue 
     */
    public constructor(windowsInformationProtectionPolicyParameterValue?: WindowsInformationProtectionPolicy | undefined) {
        super();
        this.daysWithoutContactBeforeUnenroll = windowsInformationProtectionPolicyParameterValue?.daysWithoutContactBeforeUnenroll ;
        this.mdmEnrollmentUrl = windowsInformationProtectionPolicyParameterValue?.mdmEnrollmentUrl ;
        this.minutesOfInactivityBeforeDeviceLock = windowsInformationProtectionPolicyParameterValue?.minutesOfInactivityBeforeDeviceLock ;
        this.numberOfPastPinsRemembered = windowsInformationProtectionPolicyParameterValue?.numberOfPastPinsRemembered ;
        this.passwordMaximumAttemptCount = windowsInformationProtectionPolicyParameterValue?.passwordMaximumAttemptCount ;
        this.pinExpirationDays = windowsInformationProtectionPolicyParameterValue?.pinExpirationDays ;
        this.pinLowercaseLetters = windowsInformationProtectionPolicyParameterValue?.pinLowercaseLetters ;
        this.pinMinimumLength = windowsInformationProtectionPolicyParameterValue?.pinMinimumLength ;
        this.pinSpecialCharacters = windowsInformationProtectionPolicyParameterValue?.pinSpecialCharacters ;
        this.pinUppercaseLetters = windowsInformationProtectionPolicyParameterValue?.pinUppercaseLetters ;
        this.revokeOnMdmHandoffDisabled = windowsInformationProtectionPolicyParameterValue?.revokeOnMdmHandoffDisabled ;
        this.windowsHelloForBusinessBlocked = windowsInformationProtectionPolicyParameterValue?.windowsHelloForBusinessBlocked ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.daysWithoutContactBeforeUnenroll){
        writer.writeNumberValue("daysWithoutContactBeforeUnenroll", this.daysWithoutContactBeforeUnenroll);
        }
        if(this.mdmEnrollmentUrl){
        writer.writeStringValue("mdmEnrollmentUrl", this.mdmEnrollmentUrl);
        }
        if(this.minutesOfInactivityBeforeDeviceLock){
        writer.writeNumberValue("minutesOfInactivityBeforeDeviceLock", this.minutesOfInactivityBeforeDeviceLock);
        }
        if(this.numberOfPastPinsRemembered){
        writer.writeNumberValue("numberOfPastPinsRemembered", this.numberOfPastPinsRemembered);
        }
        if(this.passwordMaximumAttemptCount){
        writer.writeNumberValue("passwordMaximumAttemptCount", this.passwordMaximumAttemptCount);
        }
        if(this.pinExpirationDays){
        writer.writeNumberValue("pinExpirationDays", this.pinExpirationDays);
        }
        if(this.pinLowercaseLetters){
        writer.writeEnumValue<WindowsInformationProtectionPinCharacterRequirements>("pinLowercaseLetters", this.pinLowercaseLetters);
        }
        if(this.pinMinimumLength){
        writer.writeNumberValue("pinMinimumLength", this.pinMinimumLength);
        }
        if(this.pinSpecialCharacters){
        writer.writeEnumValue<WindowsInformationProtectionPinCharacterRequirements>("pinSpecialCharacters", this.pinSpecialCharacters);
        }
        if(this.pinUppercaseLetters){
        writer.writeEnumValue<WindowsInformationProtectionPinCharacterRequirements>("pinUppercaseLetters", this.pinUppercaseLetters);
        }
        if(this.revokeOnMdmHandoffDisabled){
        writer.writeBooleanValue("revokeOnMdmHandoffDisabled", this.revokeOnMdmHandoffDisabled);
        }
        if(this.windowsHelloForBusinessBlocked){
        writer.writeBooleanValue("windowsHelloForBusinessBlocked", this.windowsHelloForBusinessBlocked);
        }
    };
}
