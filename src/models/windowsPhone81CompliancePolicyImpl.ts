import {DeviceCompliancePolicyImpl} from './index';
import {RequiredPasswordType} from './requiredPasswordType';
import {WindowsPhone81CompliancePolicy} from './windowsPhone81CompliancePolicy';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WindowsPhone81CompliancePolicyImpl extends DeviceCompliancePolicyImpl implements WindowsPhone81CompliancePolicy {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Maximum Windows Phone version. */
    public osMaximumVersion?: string | undefined;
    /** Minimum Windows Phone version. */
    public osMinimumVersion?: string | undefined;
    /** Whether or not to block syncing the calendar. */
    public passwordBlockSimple?: boolean | undefined;
    /** Number of days before the password expires. */
    public passwordExpirationDays?: number | undefined;
    /** The number of character sets required in the password. */
    public passwordMinimumCharacterSetCount?: number | undefined;
    /** Minimum length of passwords. */
    public passwordMinimumLength?: number | undefined;
    /** Minutes of inactivity before a password is required. */
    public passwordMinutesOfInactivityBeforeLock?: number | undefined;
    /** Number of previous passwords to block. Valid values 0 to 24 */
    public passwordPreviousPasswordBlockCount?: number | undefined;
    /** Whether or not to require a password. */
    public passwordRequired?: boolean | undefined;
    /** The required password type. Possible values are: deviceDefault, alphanumeric, numeric. */
    public passwordRequiredType?: RequiredPasswordType | undefined;
    /** Require encryption on windows phone devices. */
    public storageRequireEncryption?: boolean | undefined;
    /**
     * Instantiates a new WindowsPhone81CompliancePolicy and sets the default values.
     * @param windowsPhone81CompliancePolicyParameterValue 
     */
    public constructor(windowsPhone81CompliancePolicyParameterValue?: WindowsPhone81CompliancePolicy | undefined) {
        super(windowsPhone81CompliancePolicyParameterValue);
        this.additionalData = windowsPhone81CompliancePolicyParameterValue?.additionalData ? windowsPhone81CompliancePolicyParameterValue?.additionalData! : {};
        this.osMaximumVersion = windowsPhone81CompliancePolicyParameterValue?.osMaximumVersion;
        this.osMinimumVersion = windowsPhone81CompliancePolicyParameterValue?.osMinimumVersion;
        this.passwordBlockSimple = windowsPhone81CompliancePolicyParameterValue?.passwordBlockSimple;
        this.passwordExpirationDays = windowsPhone81CompliancePolicyParameterValue?.passwordExpirationDays;
        this.passwordMinimumCharacterSetCount = windowsPhone81CompliancePolicyParameterValue?.passwordMinimumCharacterSetCount;
        this.passwordMinimumLength = windowsPhone81CompliancePolicyParameterValue?.passwordMinimumLength;
        this.passwordMinutesOfInactivityBeforeLock = windowsPhone81CompliancePolicyParameterValue?.passwordMinutesOfInactivityBeforeLock;
        this.passwordPreviousPasswordBlockCount = windowsPhone81CompliancePolicyParameterValue?.passwordPreviousPasswordBlockCount;
        this.passwordRequired = windowsPhone81CompliancePolicyParameterValue?.passwordRequired;
        this.passwordRequiredType = windowsPhone81CompliancePolicyParameterValue?.passwordRequiredType;
        this.storageRequireEncryption = windowsPhone81CompliancePolicyParameterValue?.storageRequireEncryption;
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
        writer.writeAdditionalData(this.additionalData);
    };
}
