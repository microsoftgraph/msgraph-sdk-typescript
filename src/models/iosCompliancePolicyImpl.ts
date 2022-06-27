import {DeviceThreatProtectionLevel} from './deviceThreatProtectionLevel';
import {DeviceCompliancePolicyImpl} from './index';
import {IosCompliancePolicy} from './iosCompliancePolicy';
import {RequiredPasswordType} from './requiredPasswordType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IosCompliancePolicyImpl extends DeviceCompliancePolicyImpl implements IosCompliancePolicy {
    /** Require that devices have enabled device threat protection . */
    public deviceThreatProtectionEnabled?: boolean | undefined;
    /** Require Mobile Threat Protection minimum risk level to report noncompliance. Possible values are: unavailable, secured, low, medium, high, notSet. */
    public deviceThreatProtectionRequiredSecurityLevel?: DeviceThreatProtectionLevel | undefined;
    /** Indicates whether or not to require a managed email profile. */
    public managedEmailProfileRequired?: boolean | undefined;
    /** Maximum IOS version. */
    public osMaximumVersion?: string | undefined;
    /** Minimum IOS version. */
    public osMinimumVersion?: string | undefined;
    /** Indicates whether or not to block simple passcodes. */
    public passcodeBlockSimple?: boolean | undefined;
    /** Number of days before the passcode expires. Valid values 1 to 65535 */
    public passcodeExpirationDays?: number | undefined;
    /** The number of character sets required in the password. */
    public passcodeMinimumCharacterSetCount?: number | undefined;
    /** Minimum length of passcode. Valid values 4 to 14 */
    public passcodeMinimumLength?: number | undefined;
    /** Minutes of inactivity before a passcode is required. */
    public passcodeMinutesOfInactivityBeforeLock?: number | undefined;
    /** Number of previous passcodes to block. Valid values 1 to 24 */
    public passcodePreviousPasscodeBlockCount?: number | undefined;
    /** Indicates whether or not to require a passcode. */
    public passcodeRequired?: boolean | undefined;
    /** The required passcode type. Possible values are: deviceDefault, alphanumeric, numeric. */
    public passcodeRequiredType?: RequiredPasswordType | undefined;
    /** Devices must not be jailbroken or rooted. */
    public securityBlockJailbrokenDevices?: boolean | undefined;
    /**
     * Instantiates a new IosCompliancePolicy and sets the default values.
     * @param iosCompliancePolicyParameterValue 
     */
    public constructor(iosCompliancePolicyParameterValue?: IosCompliancePolicy | undefined) {
        super(iosCompliancePolicyParameterValue);
        this.deviceThreatProtectionEnabled = iosCompliancePolicyParameterValue?.deviceThreatProtectionEnabled;
        this.deviceThreatProtectionRequiredSecurityLevel = iosCompliancePolicyParameterValue?.deviceThreatProtectionRequiredSecurityLevel;
        this.managedEmailProfileRequired = iosCompliancePolicyParameterValue?.managedEmailProfileRequired;
        this.osMaximumVersion = iosCompliancePolicyParameterValue?.osMaximumVersion;
        this.osMinimumVersion = iosCompliancePolicyParameterValue?.osMinimumVersion;
        this.passcodeBlockSimple = iosCompliancePolicyParameterValue?.passcodeBlockSimple;
        this.passcodeExpirationDays = iosCompliancePolicyParameterValue?.passcodeExpirationDays;
        this.passcodeMinimumCharacterSetCount = iosCompliancePolicyParameterValue?.passcodeMinimumCharacterSetCount;
        this.passcodeMinimumLength = iosCompliancePolicyParameterValue?.passcodeMinimumLength;
        this.passcodeMinutesOfInactivityBeforeLock = iosCompliancePolicyParameterValue?.passcodeMinutesOfInactivityBeforeLock;
        this.passcodePreviousPasscodeBlockCount = iosCompliancePolicyParameterValue?.passcodePreviousPasscodeBlockCount;
        this.passcodeRequired = iosCompliancePolicyParameterValue?.passcodeRequired;
        this.passcodeRequiredType = iosCompliancePolicyParameterValue?.passcodeRequiredType;
        this.securityBlockJailbrokenDevices = iosCompliancePolicyParameterValue?.securityBlockJailbrokenDevices;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "deviceThreatProtectionEnabled": n => { this.deviceThreatProtectionEnabled = n.getBooleanValue(); },
            "deviceThreatProtectionRequiredSecurityLevel": n => { this.deviceThreatProtectionRequiredSecurityLevel = n.getEnumValue<DeviceThreatProtectionLevel>(DeviceThreatProtectionLevel); },
            "managedEmailProfileRequired": n => { this.managedEmailProfileRequired = n.getBooleanValue(); },
            "osMaximumVersion": n => { this.osMaximumVersion = n.getStringValue(); },
            "osMinimumVersion": n => { this.osMinimumVersion = n.getStringValue(); },
            "passcodeBlockSimple": n => { this.passcodeBlockSimple = n.getBooleanValue(); },
            "passcodeExpirationDays": n => { this.passcodeExpirationDays = n.getNumberValue(); },
            "passcodeMinimumCharacterSetCount": n => { this.passcodeMinimumCharacterSetCount = n.getNumberValue(); },
            "passcodeMinimumLength": n => { this.passcodeMinimumLength = n.getNumberValue(); },
            "passcodeMinutesOfInactivityBeforeLock": n => { this.passcodeMinutesOfInactivityBeforeLock = n.getNumberValue(); },
            "passcodePreviousPasscodeBlockCount": n => { this.passcodePreviousPasscodeBlockCount = n.getNumberValue(); },
            "passcodeRequired": n => { this.passcodeRequired = n.getBooleanValue(); },
            "passcodeRequiredType": n => { this.passcodeRequiredType = n.getEnumValue<RequiredPasswordType>(RequiredPasswordType); },
            "securityBlockJailbrokenDevices": n => { this.securityBlockJailbrokenDevices = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.deviceThreatProtectionEnabled){
            writer.writeBooleanValue("deviceThreatProtectionEnabled", this.deviceThreatProtectionEnabled);
        }
        if(this.deviceThreatProtectionRequiredSecurityLevel){
            writer.writeEnumValue<DeviceThreatProtectionLevel>("deviceThreatProtectionRequiredSecurityLevel", this.deviceThreatProtectionRequiredSecurityLevel);
        }
        if(this.managedEmailProfileRequired){
            writer.writeBooleanValue("managedEmailProfileRequired", this.managedEmailProfileRequired);
        }
        if(this.osMaximumVersion){
            writer.writeStringValue("osMaximumVersion", this.osMaximumVersion);
        }
        if(this.osMinimumVersion){
            writer.writeStringValue("osMinimumVersion", this.osMinimumVersion);
        }
        if(this.passcodeBlockSimple){
            writer.writeBooleanValue("passcodeBlockSimple", this.passcodeBlockSimple);
        }
        if(this.passcodeExpirationDays){
            writer.writeNumberValue("passcodeExpirationDays", this.passcodeExpirationDays);
        }
        if(this.passcodeMinimumCharacterSetCount){
            writer.writeNumberValue("passcodeMinimumCharacterSetCount", this.passcodeMinimumCharacterSetCount);
        }
        if(this.passcodeMinimumLength){
            writer.writeNumberValue("passcodeMinimumLength", this.passcodeMinimumLength);
        }
        if(this.passcodeMinutesOfInactivityBeforeLock){
            writer.writeNumberValue("passcodeMinutesOfInactivityBeforeLock", this.passcodeMinutesOfInactivityBeforeLock);
        }
        if(this.passcodePreviousPasscodeBlockCount){
            writer.writeNumberValue("passcodePreviousPasscodeBlockCount", this.passcodePreviousPasscodeBlockCount);
        }
        if(this.passcodeRequired){
            writer.writeBooleanValue("passcodeRequired", this.passcodeRequired);
        }
        if(this.passcodeRequiredType){
            writer.writeEnumValue<RequiredPasswordType>("passcodeRequiredType", this.passcodeRequiredType);
        }
        if(this.securityBlockJailbrokenDevices){
            writer.writeBooleanValue("securityBlockJailbrokenDevices", this.securityBlockJailbrokenDevices);
        }
    };
}
