import {DeviceThreatProtectionLevel} from './deviceThreatProtectionLevel';
import {DeviceCompliancePolicyImpl} from './index';
import {MacOSCompliancePolicy} from './macOSCompliancePolicy';
import {RequiredPasswordType} from './requiredPasswordType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MacOSCompliancePolicyImpl extends DeviceCompliancePolicyImpl implements MacOSCompliancePolicy {
    /** Require that devices have enabled device threat protection. */
    public deviceThreatProtectionEnabled?: boolean | undefined;
    /** Require Mobile Threat Protection minimum risk level to report noncompliance. Possible values are: unavailable, secured, low, medium, high, notSet. */
    public deviceThreatProtectionRequiredSecurityLevel?: DeviceThreatProtectionLevel | undefined;
    /** Corresponds to the 'Block all incoming connections' option. */
    public firewallBlockAllIncoming?: boolean | undefined;
    /** Whether the firewall should be enabled or not. */
    public firewallEnabled?: boolean | undefined;
    /** Corresponds to 'Enable stealth mode.' */
    public firewallEnableStealthMode?: boolean | undefined;
    /** Maximum MacOS version. */
    public osMaximumVersion?: string | undefined;
    /** Minimum MacOS version. */
    public osMinimumVersion?: string | undefined;
    /** Indicates whether or not to block simple passwords. */
    public passwordBlockSimple?: boolean | undefined;
    /** Number of days before the password expires. Valid values 1 to 65535 */
    public passwordExpirationDays?: number | undefined;
    /** The number of character sets required in the password. */
    public passwordMinimumCharacterSetCount?: number | undefined;
    /** Minimum length of password. Valid values 4 to 14 */
    public passwordMinimumLength?: number | undefined;
    /** Minutes of inactivity before a password is required. */
    public passwordMinutesOfInactivityBeforeLock?: number | undefined;
    /** Number of previous passwords to block. Valid values 1 to 24 */
    public passwordPreviousPasswordBlockCount?: number | undefined;
    /** Whether or not to require a password. */
    public passwordRequired?: boolean | undefined;
    /** The required password type. Possible values are: deviceDefault, alphanumeric, numeric. */
    public passwordRequiredType?: RequiredPasswordType | undefined;
    /** Require encryption on Mac OS devices. */
    public storageRequireEncryption?: boolean | undefined;
    /** Require that devices have enabled system integrity protection. */
    public systemIntegrityProtectionEnabled?: boolean | undefined;
    /**
     * Instantiates a new MacOSCompliancePolicy and sets the default values.
     * @param macOSCompliancePolicyParameterValue 
     */
    public constructor(macOSCompliancePolicyParameterValue?: MacOSCompliancePolicy | undefined) {
        super(macOSCompliancePolicyParameterValue);
        this.deviceThreatProtectionEnabled = macOSCompliancePolicyParameterValue?.deviceThreatProtectionEnabled;
        this.deviceThreatProtectionRequiredSecurityLevel = macOSCompliancePolicyParameterValue?.deviceThreatProtectionRequiredSecurityLevel;
        this.firewallBlockAllIncoming = macOSCompliancePolicyParameterValue?.firewallBlockAllIncoming;
        this.firewallEnabled = macOSCompliancePolicyParameterValue?.firewallEnabled;
        this.firewallEnableStealthMode = macOSCompliancePolicyParameterValue?.firewallEnableStealthMode;
        this.osMaximumVersion = macOSCompliancePolicyParameterValue?.osMaximumVersion;
        this.osMinimumVersion = macOSCompliancePolicyParameterValue?.osMinimumVersion;
        this.passwordBlockSimple = macOSCompliancePolicyParameterValue?.passwordBlockSimple;
        this.passwordExpirationDays = macOSCompliancePolicyParameterValue?.passwordExpirationDays;
        this.passwordMinimumCharacterSetCount = macOSCompliancePolicyParameterValue?.passwordMinimumCharacterSetCount;
        this.passwordMinimumLength = macOSCompliancePolicyParameterValue?.passwordMinimumLength;
        this.passwordMinutesOfInactivityBeforeLock = macOSCompliancePolicyParameterValue?.passwordMinutesOfInactivityBeforeLock;
        this.passwordPreviousPasswordBlockCount = macOSCompliancePolicyParameterValue?.passwordPreviousPasswordBlockCount;
        this.passwordRequired = macOSCompliancePolicyParameterValue?.passwordRequired;
        this.passwordRequiredType = macOSCompliancePolicyParameterValue?.passwordRequiredType;
        this.storageRequireEncryption = macOSCompliancePolicyParameterValue?.storageRequireEncryption;
        this.systemIntegrityProtectionEnabled = macOSCompliancePolicyParameterValue?.systemIntegrityProtectionEnabled;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "deviceThreatProtectionEnabled": n => { this.deviceThreatProtectionEnabled = n.getBooleanValue(); },
            "deviceThreatProtectionRequiredSecurityLevel": n => { this.deviceThreatProtectionRequiredSecurityLevel = n.getEnumValue<DeviceThreatProtectionLevel>(DeviceThreatProtectionLevel); },
            "firewallBlockAllIncoming": n => { this.firewallBlockAllIncoming = n.getBooleanValue(); },
            "firewallEnabled": n => { this.firewallEnabled = n.getBooleanValue(); },
            "firewallEnableStealthMode": n => { this.firewallEnableStealthMode = n.getBooleanValue(); },
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
            "systemIntegrityProtectionEnabled": n => { this.systemIntegrityProtectionEnabled = n.getBooleanValue(); },
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
        if(this.firewallBlockAllIncoming){
            writer.writeBooleanValue("firewallBlockAllIncoming", this.firewallBlockAllIncoming);
        }
        if(this.firewallEnabled){
            writer.writeBooleanValue("firewallEnabled", this.firewallEnabled);
        }
        if(this.firewallEnableStealthMode){
            writer.writeBooleanValue("firewallEnableStealthMode", this.firewallEnableStealthMode);
        }
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
        if(this.systemIntegrityProtectionEnabled){
            writer.writeBooleanValue("systemIntegrityProtectionEnabled", this.systemIntegrityProtectionEnabled);
        }
    };
}
