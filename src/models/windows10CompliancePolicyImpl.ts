import {DeviceCompliancePolicyImpl} from './index';
import {RequiredPasswordType} from './requiredPasswordType';
import {Windows10CompliancePolicy} from './windows10CompliancePolicy';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Windows10CompliancePolicyImpl extends DeviceCompliancePolicyImpl implements Windows10CompliancePolicy {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Require devices to be reported healthy by Windows Device Health Attestation - bit locker is enabled */
    public bitLockerEnabled?: boolean | undefined;
    /** Require devices to be reported as healthy by Windows Device Health Attestation. */
    public codeIntegrityEnabled?: boolean | undefined;
    /** Require devices to be reported as healthy by Windows Device Health Attestation - early launch antimalware driver is enabled. */
    public earlyLaunchAntiMalwareDriverEnabled?: boolean | undefined;
    /** Maximum Windows Phone version. */
    public mobileOsMaximumVersion?: string | undefined;
    /** Minimum Windows Phone version. */
    public mobileOsMinimumVersion?: string | undefined;
    /** Maximum Windows 10 version. */
    public osMaximumVersion?: string | undefined;
    /** Minimum Windows 10 version. */
    public osMinimumVersion?: string | undefined;
    /** Indicates whether or not to block simple password. */
    public passwordBlockSimple?: boolean | undefined;
    /** The password expiration in days. */
    public passwordExpirationDays?: number | undefined;
    /** The number of character sets required in the password. */
    public passwordMinimumCharacterSetCount?: number | undefined;
    /** The minimum password length. */
    public passwordMinimumLength?: number | undefined;
    /** Minutes of inactivity before a password is required. */
    public passwordMinutesOfInactivityBeforeLock?: number | undefined;
    /** The number of previous passwords to prevent re-use of. */
    public passwordPreviousPasswordBlockCount?: number | undefined;
    /** Require a password to unlock Windows device. */
    public passwordRequired?: boolean | undefined;
    /** Require a password to unlock an idle device. */
    public passwordRequiredToUnlockFromIdle?: boolean | undefined;
    /** The required password type. Possible values are: deviceDefault, alphanumeric, numeric. */
    public passwordRequiredType?: RequiredPasswordType | undefined;
    /** Require devices to be reported as healthy by Windows Device Health Attestation. */
    public requireHealthyDeviceReport?: boolean | undefined;
    /** Require devices to be reported as healthy by Windows Device Health Attestation - secure boot is enabled. */
    public secureBootEnabled?: boolean | undefined;
    /** Require encryption on windows devices. */
    public storageRequireEncryption?: boolean | undefined;
    /**
     * Instantiates a new Windows10CompliancePolicy and sets the default values.
     * @param windows10CompliancePolicyParameterValue 
     */
    public constructor(windows10CompliancePolicyParameterValue?: Windows10CompliancePolicy | undefined) {
        super(windows10CompliancePolicyParameterValue);
        this.additionalData = windows10CompliancePolicyParameterValue?.additionalData ? windows10CompliancePolicyParameterValue?.additionalData! : {};
        this.bitLockerEnabled = windows10CompliancePolicyParameterValue?.bitLockerEnabled;
        this.codeIntegrityEnabled = windows10CompliancePolicyParameterValue?.codeIntegrityEnabled;
        this.earlyLaunchAntiMalwareDriverEnabled = windows10CompliancePolicyParameterValue?.earlyLaunchAntiMalwareDriverEnabled;
        this.mobileOsMaximumVersion = windows10CompliancePolicyParameterValue?.mobileOsMaximumVersion;
        this.mobileOsMinimumVersion = windows10CompliancePolicyParameterValue?.mobileOsMinimumVersion;
        this.osMaximumVersion = windows10CompliancePolicyParameterValue?.osMaximumVersion;
        this.osMinimumVersion = windows10CompliancePolicyParameterValue?.osMinimumVersion;
        this.passwordBlockSimple = windows10CompliancePolicyParameterValue?.passwordBlockSimple;
        this.passwordExpirationDays = windows10CompliancePolicyParameterValue?.passwordExpirationDays;
        this.passwordMinimumCharacterSetCount = windows10CompliancePolicyParameterValue?.passwordMinimumCharacterSetCount;
        this.passwordMinimumLength = windows10CompliancePolicyParameterValue?.passwordMinimumLength;
        this.passwordMinutesOfInactivityBeforeLock = windows10CompliancePolicyParameterValue?.passwordMinutesOfInactivityBeforeLock;
        this.passwordPreviousPasswordBlockCount = windows10CompliancePolicyParameterValue?.passwordPreviousPasswordBlockCount;
        this.passwordRequired = windows10CompliancePolicyParameterValue?.passwordRequired;
        this.passwordRequiredToUnlockFromIdle = windows10CompliancePolicyParameterValue?.passwordRequiredToUnlockFromIdle;
        this.passwordRequiredType = windows10CompliancePolicyParameterValue?.passwordRequiredType;
        this.requireHealthyDeviceReport = windows10CompliancePolicyParameterValue?.requireHealthyDeviceReport;
        this.secureBootEnabled = windows10CompliancePolicyParameterValue?.secureBootEnabled;
        this.storageRequireEncryption = windows10CompliancePolicyParameterValue?.storageRequireEncryption;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "bitLockerEnabled": n => { this.bitLockerEnabled = n.getBooleanValue(); },
            "codeIntegrityEnabled": n => { this.codeIntegrityEnabled = n.getBooleanValue(); },
            "earlyLaunchAntiMalwareDriverEnabled": n => { this.earlyLaunchAntiMalwareDriverEnabled = n.getBooleanValue(); },
            "mobileOsMaximumVersion": n => { this.mobileOsMaximumVersion = n.getStringValue(); },
            "mobileOsMinimumVersion": n => { this.mobileOsMinimumVersion = n.getStringValue(); },
            "osMaximumVersion": n => { this.osMaximumVersion = n.getStringValue(); },
            "osMinimumVersion": n => { this.osMinimumVersion = n.getStringValue(); },
            "passwordBlockSimple": n => { this.passwordBlockSimple = n.getBooleanValue(); },
            "passwordExpirationDays": n => { this.passwordExpirationDays = n.getNumberValue(); },
            "passwordMinimumCharacterSetCount": n => { this.passwordMinimumCharacterSetCount = n.getNumberValue(); },
            "passwordMinimumLength": n => { this.passwordMinimumLength = n.getNumberValue(); },
            "passwordMinutesOfInactivityBeforeLock": n => { this.passwordMinutesOfInactivityBeforeLock = n.getNumberValue(); },
            "passwordPreviousPasswordBlockCount": n => { this.passwordPreviousPasswordBlockCount = n.getNumberValue(); },
            "passwordRequired": n => { this.passwordRequired = n.getBooleanValue(); },
            "passwordRequiredToUnlockFromIdle": n => { this.passwordRequiredToUnlockFromIdle = n.getBooleanValue(); },
            "passwordRequiredType": n => { this.passwordRequiredType = n.getEnumValue<RequiredPasswordType>(RequiredPasswordType); },
            "requireHealthyDeviceReport": n => { this.requireHealthyDeviceReport = n.getBooleanValue(); },
            "secureBootEnabled": n => { this.secureBootEnabled = n.getBooleanValue(); },
            "storageRequireEncryption": n => { this.storageRequireEncryption = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.bitLockerEnabled){
            writer.writeBooleanValue("bitLockerEnabled", this.bitLockerEnabled);
        }
        if(this.codeIntegrityEnabled){
            writer.writeBooleanValue("codeIntegrityEnabled", this.codeIntegrityEnabled);
        }
        if(this.earlyLaunchAntiMalwareDriverEnabled){
            writer.writeBooleanValue("earlyLaunchAntiMalwareDriverEnabled", this.earlyLaunchAntiMalwareDriverEnabled);
        }
        if(this.mobileOsMaximumVersion){
            writer.writeStringValue("mobileOsMaximumVersion", this.mobileOsMaximumVersion);
        }
        if(this.mobileOsMinimumVersion){
            writer.writeStringValue("mobileOsMinimumVersion", this.mobileOsMinimumVersion);
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
        if(this.passwordRequiredToUnlockFromIdle){
            writer.writeBooleanValue("passwordRequiredToUnlockFromIdle", this.passwordRequiredToUnlockFromIdle);
        }
        if(this.passwordRequiredType){
            writer.writeEnumValue<RequiredPasswordType>("passwordRequiredType", this.passwordRequiredType);
        }
        if(this.requireHealthyDeviceReport){
            writer.writeBooleanValue("requireHealthyDeviceReport", this.requireHealthyDeviceReport);
        }
        if(this.secureBootEnabled){
            writer.writeBooleanValue("secureBootEnabled", this.secureBootEnabled);
        }
        if(this.storageRequireEncryption){
            writer.writeBooleanValue("storageRequireEncryption", this.storageRequireEncryption);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
