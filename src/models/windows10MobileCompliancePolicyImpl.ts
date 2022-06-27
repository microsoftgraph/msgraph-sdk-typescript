import {DeviceCompliancePolicyImpl} from './index';
import {RequiredPasswordType} from './requiredPasswordType';
import {Windows10MobileCompliancePolicy} from './windows10MobileCompliancePolicy';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Windows10MobileCompliancePolicyImpl extends DeviceCompliancePolicyImpl implements Windows10MobileCompliancePolicy {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Require devices to be reported healthy by Windows Device Health Attestation - bit locker is enabled */
    public bitLockerEnabled?: boolean | undefined;
    /** Require devices to be reported as healthy by Windows Device Health Attestation. */
    public codeIntegrityEnabled?: boolean | undefined;
    /** Require devices to be reported as healthy by Windows Device Health Attestation - early launch antimalware driver is enabled. */
    public earlyLaunchAntiMalwareDriverEnabled?: boolean | undefined;
    /** Maximum Windows Phone version. */
    public osMaximumVersion?: string | undefined;
    /** Minimum Windows Phone version. */
    public osMinimumVersion?: string | undefined;
    /** Whether or not to block syncing the calendar. */
    public passwordBlockSimple?: boolean | undefined;
    /** Number of days before password expiration. Valid values 1 to 255 */
    public passwordExpirationDays?: number | undefined;
    /** The number of character sets required in the password. */
    public passwordMinimumCharacterSetCount?: number | undefined;
    /** Minimum password length. Valid values 4 to 16 */
    public passwordMinimumLength?: number | undefined;
    /** Minutes of inactivity before a password is required. */
    public passwordMinutesOfInactivityBeforeLock?: number | undefined;
    /** The number of previous passwords to prevent re-use of. */
    public passwordPreviousPasswordBlockCount?: number | undefined;
    /** Require a password to unlock Windows Phone device. */
    public passwordRequired?: boolean | undefined;
    /** The required password type. Possible values are: deviceDefault, alphanumeric, numeric. */
    public passwordRequiredType?: RequiredPasswordType | undefined;
    /** Require a password to unlock an idle device. */
    public passwordRequireToUnlockFromIdle?: boolean | undefined;
    /** Require devices to be reported as healthy by Windows Device Health Attestation - secure boot is enabled. */
    public secureBootEnabled?: boolean | undefined;
    /** Require encryption on windows devices. */
    public storageRequireEncryption?: boolean | undefined;
    /**
     * Instantiates a new Windows10MobileCompliancePolicy and sets the default values.
     * @param windows10MobileCompliancePolicyParameterValue 
     */
    public constructor(windows10MobileCompliancePolicyParameterValue?: Windows10MobileCompliancePolicy | undefined) {
        super(windows10MobileCompliancePolicyParameterValue);
        this.additionalData = windows10MobileCompliancePolicyParameterValue?.additionalData ? windows10MobileCompliancePolicyParameterValue?.additionalData! : {};
        this.bitLockerEnabled = windows10MobileCompliancePolicyParameterValue?.bitLockerEnabled;
        this.codeIntegrityEnabled = windows10MobileCompliancePolicyParameterValue?.codeIntegrityEnabled;
        this.earlyLaunchAntiMalwareDriverEnabled = windows10MobileCompliancePolicyParameterValue?.earlyLaunchAntiMalwareDriverEnabled;
        this.osMaximumVersion = windows10MobileCompliancePolicyParameterValue?.osMaximumVersion;
        this.osMinimumVersion = windows10MobileCompliancePolicyParameterValue?.osMinimumVersion;
        this.passwordBlockSimple = windows10MobileCompliancePolicyParameterValue?.passwordBlockSimple;
        this.passwordExpirationDays = windows10MobileCompliancePolicyParameterValue?.passwordExpirationDays;
        this.passwordMinimumCharacterSetCount = windows10MobileCompliancePolicyParameterValue?.passwordMinimumCharacterSetCount;
        this.passwordMinimumLength = windows10MobileCompliancePolicyParameterValue?.passwordMinimumLength;
        this.passwordMinutesOfInactivityBeforeLock = windows10MobileCompliancePolicyParameterValue?.passwordMinutesOfInactivityBeforeLock;
        this.passwordPreviousPasswordBlockCount = windows10MobileCompliancePolicyParameterValue?.passwordPreviousPasswordBlockCount;
        this.passwordRequired = windows10MobileCompliancePolicyParameterValue?.passwordRequired;
        this.passwordRequiredType = windows10MobileCompliancePolicyParameterValue?.passwordRequiredType;
        this.passwordRequireToUnlockFromIdle = windows10MobileCompliancePolicyParameterValue?.passwordRequireToUnlockFromIdle;
        this.secureBootEnabled = windows10MobileCompliancePolicyParameterValue?.secureBootEnabled;
        this.storageRequireEncryption = windows10MobileCompliancePolicyParameterValue?.storageRequireEncryption;
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
            "passwordRequireToUnlockFromIdle": n => { this.passwordRequireToUnlockFromIdle = n.getBooleanValue(); },
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
        if(this.passwordRequireToUnlockFromIdle){
            writer.writeBooleanValue("passwordRequireToUnlockFromIdle", this.passwordRequireToUnlockFromIdle);
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
