import {DeviceEnrollmentWindowsHelloForBusinessConfiguration} from './deviceEnrollmentWindowsHelloForBusinessConfiguration';
import {Enablement} from './enablement';
import {DeviceEnrollmentConfigurationImpl} from './index';
import {WindowsHelloForBusinessPinUsage} from './windowsHelloForBusinessPinUsage';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceEnrollmentWindowsHelloForBusinessConfigurationImpl extends DeviceEnrollmentConfigurationImpl implements DeviceEnrollmentWindowsHelloForBusinessConfiguration {
    /** Controls the ability to use the anti-spoofing features for facial recognition on devices which support it. If set to disabled, anti-spoofing features are not allowed. If set to Not Configured, the user can choose whether they want to use anti-spoofing. Possible values are: notConfigured, enabled, disabled. */
    public enhancedBiometricsState?: Enablement | undefined;
    /** Controls the period of time (in days) that a PIN can be used before the system requires the user to change it. This must be set between 0 and 730, inclusive. If set to 0, the user's PIN will never expire */
    public pinExpirationInDays?: number | undefined;
    /** Controls the ability to use lowercase letters in the Windows Hello for Business PIN.  Allowed permits the use of lowercase letter(s), whereas Required ensures they are present. If set to Not Allowed, lowercase letters will not be permitted. Possible values are: allowed, required, disallowed. */
    public pinLowercaseCharactersUsage?: WindowsHelloForBusinessPinUsage | undefined;
    /** Controls the maximum number of characters allowed for the Windows Hello for Business PIN. This value must be between 4 and 127, inclusive. This value must be greater than or equal to the value set for the minimum PIN. */
    public pinMaximumLength?: number | undefined;
    /** Controls the minimum number of characters required for the Windows Hello for Business PIN.  This value must be between 4 and 127, inclusive, and less than or equal to the value set for the maximum PIN. */
    public pinMinimumLength?: number | undefined;
    /** Controls the ability to prevent users from using past PINs. This must be set between 0 and 50, inclusive, and the current PIN of the user is included in that count. If set to 0, previous PINs are not stored. PIN history is not preserved through a PIN reset. */
    public pinPreviousBlockCount?: number | undefined;
    /** Controls the ability to use special characters in the Windows Hello for Business PIN.  Allowed permits the use of special character(s), whereas Required ensures they are present. If set to Not Allowed, special character(s) will not be permitted. Possible values are: allowed, required, disallowed. */
    public pinSpecialCharactersUsage?: WindowsHelloForBusinessPinUsage | undefined;
    /** Controls the ability to use uppercase letters in the Windows Hello for Business PIN.  Allowed permits the use of uppercase letter(s), whereas Required ensures they are present. If set to Not Allowed, uppercase letters will not be permitted. Possible values are: allowed, required, disallowed. */
    public pinUppercaseCharactersUsage?: WindowsHelloForBusinessPinUsage | undefined;
    /** Controls the use of Remote Windows Hello for Business. Remote Windows Hello for Business provides the ability for a portable, registered device to be usable as a companion for desktop authentication. The desktop must be Azure AD joined and the companion device must have a Windows Hello for Business PIN. */
    public remotePassportEnabled?: boolean | undefined;
    /** Controls whether to require a Trusted Platform Module (TPM) for provisioning Windows Hello for Business. A TPM provides an additional security benefit in that data stored on it cannot be used on other devices. If set to False, all devices can provision Windows Hello for Business even if there is not a usable TPM. */
    public securityDeviceRequired?: boolean | undefined;
    /** Controls whether to allow the device to be configured for Windows Hello for Business. If set to disabled, the user cannot provision Windows Hello for Business except on Azure Active Directory joined mobile phones if otherwise required. If set to Not Configured, Intune will not override client defaults. Possible values are: notConfigured, enabled, disabled. */
    public state?: Enablement | undefined;
    /** Controls the use of biometric gestures, such as face and fingerprint, as an alternative to the Windows Hello for Business PIN.  If set to False, biometric gestures are not allowed. Users must still configure a PIN as a backup in case of failures. */
    public unlockWithBiometricsEnabled?: boolean | undefined;
    /**
     * Instantiates a new DeviceEnrollmentWindowsHelloForBusinessConfiguration and sets the default values.
     * @param deviceEnrollmentWindowsHelloForBusinessConfigurationParameterValue 
     */
    public constructor(deviceEnrollmentWindowsHelloForBusinessConfigurationParameterValue?: DeviceEnrollmentWindowsHelloForBusinessConfiguration | undefined) {
        super(deviceEnrollmentWindowsHelloForBusinessConfigurationParameterValue);
        this.enhancedBiometricsState = deviceEnrollmentWindowsHelloForBusinessConfigurationParameterValue?.enhancedBiometricsState;
        this.pinExpirationInDays = deviceEnrollmentWindowsHelloForBusinessConfigurationParameterValue?.pinExpirationInDays;
        this.pinLowercaseCharactersUsage = deviceEnrollmentWindowsHelloForBusinessConfigurationParameterValue?.pinLowercaseCharactersUsage;
        this.pinMaximumLength = deviceEnrollmentWindowsHelloForBusinessConfigurationParameterValue?.pinMaximumLength;
        this.pinMinimumLength = deviceEnrollmentWindowsHelloForBusinessConfigurationParameterValue?.pinMinimumLength;
        this.pinPreviousBlockCount = deviceEnrollmentWindowsHelloForBusinessConfigurationParameterValue?.pinPreviousBlockCount;
        this.pinSpecialCharactersUsage = deviceEnrollmentWindowsHelloForBusinessConfigurationParameterValue?.pinSpecialCharactersUsage;
        this.pinUppercaseCharactersUsage = deviceEnrollmentWindowsHelloForBusinessConfigurationParameterValue?.pinUppercaseCharactersUsage;
        this.remotePassportEnabled = deviceEnrollmentWindowsHelloForBusinessConfigurationParameterValue?.remotePassportEnabled;
        this.securityDeviceRequired = deviceEnrollmentWindowsHelloForBusinessConfigurationParameterValue?.securityDeviceRequired;
        this.state = deviceEnrollmentWindowsHelloForBusinessConfigurationParameterValue?.state;
        this.unlockWithBiometricsEnabled = deviceEnrollmentWindowsHelloForBusinessConfigurationParameterValue?.unlockWithBiometricsEnabled;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.enhancedBiometricsState){
            writer.writeEnumValue<Enablement>("enhancedBiometricsState", this.enhancedBiometricsState);
        }
        if(this.pinExpirationInDays){
            writer.writeNumberValue("pinExpirationInDays", this.pinExpirationInDays);
        }
        if(this.pinLowercaseCharactersUsage){
            writer.writeEnumValue<WindowsHelloForBusinessPinUsage>("pinLowercaseCharactersUsage", this.pinLowercaseCharactersUsage);
        }
        if(this.pinMaximumLength){
            writer.writeNumberValue("pinMaximumLength", this.pinMaximumLength);
        }
        if(this.pinMinimumLength){
            writer.writeNumberValue("pinMinimumLength", this.pinMinimumLength);
        }
        if(this.pinPreviousBlockCount){
            writer.writeNumberValue("pinPreviousBlockCount", this.pinPreviousBlockCount);
        }
        if(this.pinSpecialCharactersUsage){
            writer.writeEnumValue<WindowsHelloForBusinessPinUsage>("pinSpecialCharactersUsage", this.pinSpecialCharactersUsage);
        }
        if(this.pinUppercaseCharactersUsage){
            writer.writeEnumValue<WindowsHelloForBusinessPinUsage>("pinUppercaseCharactersUsage", this.pinUppercaseCharactersUsage);
        }
        if(this.remotePassportEnabled){
            writer.writeBooleanValue("remotePassportEnabled", this.remotePassportEnabled);
        }
        if(this.securityDeviceRequired){
            writer.writeBooleanValue("securityDeviceRequired", this.securityDeviceRequired);
        }
        if(this.state){
            writer.writeEnumValue<Enablement>("state", this.state);
        }
        if(this.unlockWithBiometricsEnabled){
            writer.writeBooleanValue("unlockWithBiometricsEnabled", this.unlockWithBiometricsEnabled);
        }
    };
}
