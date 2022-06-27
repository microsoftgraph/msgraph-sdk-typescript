import {DeviceCompliancePolicyImpl} from './index';
import {RequiredPasswordType} from './requiredPasswordType';
import {Windows81CompliancePolicy} from './windows81CompliancePolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Windows81CompliancePolicyImpl extends DeviceCompliancePolicyImpl implements Windows81CompliancePolicy {
    /** Maximum Windows 8.1 version. */
    public osMaximumVersion?: string | undefined;
    /** Minimum Windows 8.1 version. */
    public osMinimumVersion?: string | undefined;
    /** Indicates whether or not to block simple password. */
    public passwordBlockSimple?: boolean | undefined;
    /** Password expiration in days. */
    public passwordExpirationDays?: number | undefined;
    /** The number of character sets required in the password. */
    public passwordMinimumCharacterSetCount?: number | undefined;
    /** The minimum password length. */
    public passwordMinimumLength?: number | undefined;
    /** Minutes of inactivity before a password is required. */
    public passwordMinutesOfInactivityBeforeLock?: number | undefined;
    /** The number of previous passwords to prevent re-use of. Valid values 0 to 24 */
    public passwordPreviousPasswordBlockCount?: number | undefined;
    /** Require a password to unlock Windows device. */
    public passwordRequired?: boolean | undefined;
    /** The required password type. Possible values are: deviceDefault, alphanumeric, numeric. */
    public passwordRequiredType?: RequiredPasswordType | undefined;
    /** Indicates whether or not to require encryption on a windows 8.1 device. */
    public storageRequireEncryption?: boolean | undefined;
    /**
     * Instantiates a new Windows81CompliancePolicy and sets the default values.
     * @param windows81CompliancePolicyParameterValue 
     */
    public constructor(windows81CompliancePolicyParameterValue?: Windows81CompliancePolicy | undefined) {
        super(windows81CompliancePolicyParameterValue);
        this.osMaximumVersion = windows81CompliancePolicyParameterValue?.osMaximumVersion;
        this.osMinimumVersion = windows81CompliancePolicyParameterValue?.osMinimumVersion;
        this.passwordBlockSimple = windows81CompliancePolicyParameterValue?.passwordBlockSimple;
        this.passwordExpirationDays = windows81CompliancePolicyParameterValue?.passwordExpirationDays;
        this.passwordMinimumCharacterSetCount = windows81CompliancePolicyParameterValue?.passwordMinimumCharacterSetCount;
        this.passwordMinimumLength = windows81CompliancePolicyParameterValue?.passwordMinimumLength;
        this.passwordMinutesOfInactivityBeforeLock = windows81CompliancePolicyParameterValue?.passwordMinutesOfInactivityBeforeLock;
        this.passwordPreviousPasswordBlockCount = windows81CompliancePolicyParameterValue?.passwordPreviousPasswordBlockCount;
        this.passwordRequired = windows81CompliancePolicyParameterValue?.passwordRequired;
        this.passwordRequiredType = windows81CompliancePolicyParameterValue?.passwordRequiredType;
        this.storageRequireEncryption = windows81CompliancePolicyParameterValue?.storageRequireEncryption;
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
}
