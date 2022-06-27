import {AndroidWorkProfileCrossProfileDataSharingType} from './androidWorkProfileCrossProfileDataSharingType';
import {AndroidWorkProfileDefaultAppPermissionPolicyType} from './androidWorkProfileDefaultAppPermissionPolicyType';
import {AndroidWorkProfileGeneralDeviceConfiguration} from './androidWorkProfileGeneralDeviceConfiguration';
import {AndroidWorkProfileRequiredPasswordType} from './androidWorkProfileRequiredPasswordType';
import {DeviceConfigurationImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AndroidWorkProfileGeneralDeviceConfigurationImpl extends DeviceConfigurationImpl implements AndroidWorkProfileGeneralDeviceConfiguration {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Indicates whether or not to block fingerprint unlock. */
    public passwordBlockFingerprintUnlock?: boolean | undefined;
    /** Indicates whether or not to block Smart Lock and other trust agents. */
    public passwordBlockTrustAgents?: boolean | undefined;
    /** Number of days before the password expires. Valid values 1 to 365 */
    public passwordExpirationDays?: number | undefined;
    /** Minimum length of passwords. Valid values 4 to 16 */
    public passwordMinimumLength?: number | undefined;
    /** Minutes of inactivity before the screen times out. */
    public passwordMinutesOfInactivityBeforeScreenTimeout?: number | undefined;
    /** Number of previous passwords to block. Valid values 0 to 24 */
    public passwordPreviousPasswordBlockCount?: number | undefined;
    /** Type of password that is required. Possible values are: deviceDefault, lowSecurityBiometric, required, atLeastNumeric, numericComplex, atLeastAlphabetic, atLeastAlphanumeric, alphanumericWithSymbols. */
    public passwordRequiredType?: AndroidWorkProfileRequiredPasswordType | undefined;
    /** Number of sign in failures allowed before factory reset. Valid values 1 to 16 */
    public passwordSignInFailureCountBeforeFactoryReset?: number | undefined;
    /** Require the Android Verify apps feature is turned on. */
    public securityRequireVerifyApps?: boolean | undefined;
    /** Block users from adding/removing accounts in work profile. */
    public workProfileBlockAddingAccounts?: boolean | undefined;
    /** Block work profile camera. */
    public workProfileBlockCamera?: boolean | undefined;
    /** Block display work profile caller ID in personal profile. */
    public workProfileBlockCrossProfileCallerId?: boolean | undefined;
    /** Block work profile contacts availability in personal profile. */
    public workProfileBlockCrossProfileContactsSearch?: boolean | undefined;
    /** Boolean that indicates if the setting disallow cross profile copy/paste is enabled. */
    public workProfileBlockCrossProfileCopyPaste?: boolean | undefined;
    /** Indicates whether or not to block notifications while device locked. */
    public workProfileBlockNotificationsWhileDeviceLocked?: boolean | undefined;
    /** Block screen capture in work profile. */
    public workProfileBlockScreenCapture?: boolean | undefined;
    /** Allow bluetooth devices to access enterprise contacts. */
    public workProfileBluetoothEnableContactSharing?: boolean | undefined;
    /** Type of data sharing that is allowed. Possible values are: deviceDefault, preventAny, allowPersonalToWork, noRestrictions. */
    public workProfileDataSharingType?: AndroidWorkProfileCrossProfileDataSharingType | undefined;
    /** Type of password that is required. Possible values are: deviceDefault, prompt, autoGrant, autoDeny. */
    public workProfileDefaultAppPermissionPolicy?: AndroidWorkProfileDefaultAppPermissionPolicyType | undefined;
    /** Indicates whether or not to block fingerprint unlock for work profile. */
    public workProfilePasswordBlockFingerprintUnlock?: boolean | undefined;
    /** Indicates whether or not to block Smart Lock and other trust agents for work profile. */
    public workProfilePasswordBlockTrustAgents?: boolean | undefined;
    /** Number of days before the work profile password expires. Valid values 1 to 365 */
    public workProfilePasswordExpirationDays?: number | undefined;
    /** Minimum length of work profile password. Valid values 4 to 16 */
    public workProfilePasswordMinimumLength?: number | undefined;
    /** Minimum # of letter characters required in work profile password. Valid values 1 to 10 */
    public workProfilePasswordMinLetterCharacters?: number | undefined;
    /** Minimum # of lower-case characters required in work profile password. Valid values 1 to 10 */
    public workProfilePasswordMinLowerCaseCharacters?: number | undefined;
    /** Minimum # of non-letter characters required in work profile password. Valid values 1 to 10 */
    public workProfilePasswordMinNonLetterCharacters?: number | undefined;
    /** Minimum # of numeric characters required in work profile password. Valid values 1 to 10 */
    public workProfilePasswordMinNumericCharacters?: number | undefined;
    /** Minimum # of symbols required in work profile password. Valid values 1 to 10 */
    public workProfilePasswordMinSymbolCharacters?: number | undefined;
    /** Minimum # of upper-case characters required in work profile password. Valid values 1 to 10 */
    public workProfilePasswordMinUpperCaseCharacters?: number | undefined;
    /** Minutes of inactivity before the screen times out. */
    public workProfilePasswordMinutesOfInactivityBeforeScreenTimeout?: number | undefined;
    /** Number of previous work profile passwords to block. Valid values 0 to 24 */
    public workProfilePasswordPreviousPasswordBlockCount?: number | undefined;
    /** Type of work profile password that is required. Possible values are: deviceDefault, lowSecurityBiometric, required, atLeastNumeric, numericComplex, atLeastAlphabetic, atLeastAlphanumeric, alphanumericWithSymbols. */
    public workProfilePasswordRequiredType?: AndroidWorkProfileRequiredPasswordType | undefined;
    /** Number of sign in failures allowed before work profile is removed and all corporate data deleted. Valid values 1 to 16 */
    public workProfilePasswordSignInFailureCountBeforeFactoryReset?: number | undefined;
    /** Password is required or not for work profile */
    public workProfileRequirePassword?: boolean | undefined;
    /**
     * Instantiates a new AndroidWorkProfileGeneralDeviceConfiguration and sets the default values.
     * @param androidWorkProfileGeneralDeviceConfigurationParameterValue 
     */
    public constructor(androidWorkProfileGeneralDeviceConfigurationParameterValue?: AndroidWorkProfileGeneralDeviceConfiguration | undefined) {
        super(androidWorkProfileGeneralDeviceConfigurationParameterValue);
        this.additionalData = androidWorkProfileGeneralDeviceConfigurationParameterValue?.additionalData ? androidWorkProfileGeneralDeviceConfigurationParameterValue?.additionalData! : {};
        this.passwordBlockFingerprintUnlock = androidWorkProfileGeneralDeviceConfigurationParameterValue?.passwordBlockFingerprintUnlock;
        this.passwordBlockTrustAgents = androidWorkProfileGeneralDeviceConfigurationParameterValue?.passwordBlockTrustAgents;
        this.passwordExpirationDays = androidWorkProfileGeneralDeviceConfigurationParameterValue?.passwordExpirationDays;
        this.passwordMinimumLength = androidWorkProfileGeneralDeviceConfigurationParameterValue?.passwordMinimumLength;
        this.passwordMinutesOfInactivityBeforeScreenTimeout = androidWorkProfileGeneralDeviceConfigurationParameterValue?.passwordMinutesOfInactivityBeforeScreenTimeout;
        this.passwordPreviousPasswordBlockCount = androidWorkProfileGeneralDeviceConfigurationParameterValue?.passwordPreviousPasswordBlockCount;
        this.passwordRequiredType = androidWorkProfileGeneralDeviceConfigurationParameterValue?.passwordRequiredType;
        this.passwordSignInFailureCountBeforeFactoryReset = androidWorkProfileGeneralDeviceConfigurationParameterValue?.passwordSignInFailureCountBeforeFactoryReset;
        this.securityRequireVerifyApps = androidWorkProfileGeneralDeviceConfigurationParameterValue?.securityRequireVerifyApps;
        this.workProfileBlockAddingAccounts = androidWorkProfileGeneralDeviceConfigurationParameterValue?.workProfileBlockAddingAccounts;
        this.workProfileBlockCamera = androidWorkProfileGeneralDeviceConfigurationParameterValue?.workProfileBlockCamera;
        this.workProfileBlockCrossProfileCallerId = androidWorkProfileGeneralDeviceConfigurationParameterValue?.workProfileBlockCrossProfileCallerId;
        this.workProfileBlockCrossProfileContactsSearch = androidWorkProfileGeneralDeviceConfigurationParameterValue?.workProfileBlockCrossProfileContactsSearch;
        this.workProfileBlockCrossProfileCopyPaste = androidWorkProfileGeneralDeviceConfigurationParameterValue?.workProfileBlockCrossProfileCopyPaste;
        this.workProfileBlockNotificationsWhileDeviceLocked = androidWorkProfileGeneralDeviceConfigurationParameterValue?.workProfileBlockNotificationsWhileDeviceLocked;
        this.workProfileBlockScreenCapture = androidWorkProfileGeneralDeviceConfigurationParameterValue?.workProfileBlockScreenCapture;
        this.workProfileBluetoothEnableContactSharing = androidWorkProfileGeneralDeviceConfigurationParameterValue?.workProfileBluetoothEnableContactSharing;
        this.workProfileDataSharingType = androidWorkProfileGeneralDeviceConfigurationParameterValue?.workProfileDataSharingType;
        this.workProfileDefaultAppPermissionPolicy = androidWorkProfileGeneralDeviceConfigurationParameterValue?.workProfileDefaultAppPermissionPolicy;
        this.workProfilePasswordBlockFingerprintUnlock = androidWorkProfileGeneralDeviceConfigurationParameterValue?.workProfilePasswordBlockFingerprintUnlock;
        this.workProfilePasswordBlockTrustAgents = androidWorkProfileGeneralDeviceConfigurationParameterValue?.workProfilePasswordBlockTrustAgents;
        this.workProfilePasswordExpirationDays = androidWorkProfileGeneralDeviceConfigurationParameterValue?.workProfilePasswordExpirationDays;
        this.workProfilePasswordMinimumLength = androidWorkProfileGeneralDeviceConfigurationParameterValue?.workProfilePasswordMinimumLength;
        this.workProfilePasswordMinLetterCharacters = androidWorkProfileGeneralDeviceConfigurationParameterValue?.workProfilePasswordMinLetterCharacters;
        this.workProfilePasswordMinLowerCaseCharacters = androidWorkProfileGeneralDeviceConfigurationParameterValue?.workProfilePasswordMinLowerCaseCharacters;
        this.workProfilePasswordMinNonLetterCharacters = androidWorkProfileGeneralDeviceConfigurationParameterValue?.workProfilePasswordMinNonLetterCharacters;
        this.workProfilePasswordMinNumericCharacters = androidWorkProfileGeneralDeviceConfigurationParameterValue?.workProfilePasswordMinNumericCharacters;
        this.workProfilePasswordMinSymbolCharacters = androidWorkProfileGeneralDeviceConfigurationParameterValue?.workProfilePasswordMinSymbolCharacters;
        this.workProfilePasswordMinUpperCaseCharacters = androidWorkProfileGeneralDeviceConfigurationParameterValue?.workProfilePasswordMinUpperCaseCharacters;
        this.workProfilePasswordMinutesOfInactivityBeforeScreenTimeout = androidWorkProfileGeneralDeviceConfigurationParameterValue?.workProfilePasswordMinutesOfInactivityBeforeScreenTimeout;
        this.workProfilePasswordPreviousPasswordBlockCount = androidWorkProfileGeneralDeviceConfigurationParameterValue?.workProfilePasswordPreviousPasswordBlockCount;
        this.workProfilePasswordRequiredType = androidWorkProfileGeneralDeviceConfigurationParameterValue?.workProfilePasswordRequiredType;
        this.workProfilePasswordSignInFailureCountBeforeFactoryReset = androidWorkProfileGeneralDeviceConfigurationParameterValue?.workProfilePasswordSignInFailureCountBeforeFactoryReset;
        this.workProfileRequirePassword = androidWorkProfileGeneralDeviceConfigurationParameterValue?.workProfileRequirePassword;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "passwordBlockFingerprintUnlock": n => { this.passwordBlockFingerprintUnlock = n.getBooleanValue(); },
            "passwordBlockTrustAgents": n => { this.passwordBlockTrustAgents = n.getBooleanValue(); },
            "passwordExpirationDays": n => { this.passwordExpirationDays = n.getNumberValue(); },
            "passwordMinimumLength": n => { this.passwordMinimumLength = n.getNumberValue(); },
            "passwordMinutesOfInactivityBeforeScreenTimeout": n => { this.passwordMinutesOfInactivityBeforeScreenTimeout = n.getNumberValue(); },
            "passwordPreviousPasswordBlockCount": n => { this.passwordPreviousPasswordBlockCount = n.getNumberValue(); },
            "passwordRequiredType": n => { this.passwordRequiredType = n.getEnumValue<AndroidWorkProfileRequiredPasswordType>(AndroidWorkProfileRequiredPasswordType); },
            "passwordSignInFailureCountBeforeFactoryReset": n => { this.passwordSignInFailureCountBeforeFactoryReset = n.getNumberValue(); },
            "securityRequireVerifyApps": n => { this.securityRequireVerifyApps = n.getBooleanValue(); },
            "workProfileBlockAddingAccounts": n => { this.workProfileBlockAddingAccounts = n.getBooleanValue(); },
            "workProfileBlockCamera": n => { this.workProfileBlockCamera = n.getBooleanValue(); },
            "workProfileBlockCrossProfileCallerId": n => { this.workProfileBlockCrossProfileCallerId = n.getBooleanValue(); },
            "workProfileBlockCrossProfileContactsSearch": n => { this.workProfileBlockCrossProfileContactsSearch = n.getBooleanValue(); },
            "workProfileBlockCrossProfileCopyPaste": n => { this.workProfileBlockCrossProfileCopyPaste = n.getBooleanValue(); },
            "workProfileBlockNotificationsWhileDeviceLocked": n => { this.workProfileBlockNotificationsWhileDeviceLocked = n.getBooleanValue(); },
            "workProfileBlockScreenCapture": n => { this.workProfileBlockScreenCapture = n.getBooleanValue(); },
            "workProfileBluetoothEnableContactSharing": n => { this.workProfileBluetoothEnableContactSharing = n.getBooleanValue(); },
            "workProfileDataSharingType": n => { this.workProfileDataSharingType = n.getEnumValue<AndroidWorkProfileCrossProfileDataSharingType>(AndroidWorkProfileCrossProfileDataSharingType); },
            "workProfileDefaultAppPermissionPolicy": n => { this.workProfileDefaultAppPermissionPolicy = n.getEnumValue<AndroidWorkProfileDefaultAppPermissionPolicyType>(AndroidWorkProfileDefaultAppPermissionPolicyType); },
            "workProfilePasswordBlockFingerprintUnlock": n => { this.workProfilePasswordBlockFingerprintUnlock = n.getBooleanValue(); },
            "workProfilePasswordBlockTrustAgents": n => { this.workProfilePasswordBlockTrustAgents = n.getBooleanValue(); },
            "workProfilePasswordExpirationDays": n => { this.workProfilePasswordExpirationDays = n.getNumberValue(); },
            "workProfilePasswordMinimumLength": n => { this.workProfilePasswordMinimumLength = n.getNumberValue(); },
            "workProfilePasswordMinLetterCharacters": n => { this.workProfilePasswordMinLetterCharacters = n.getNumberValue(); },
            "workProfilePasswordMinLowerCaseCharacters": n => { this.workProfilePasswordMinLowerCaseCharacters = n.getNumberValue(); },
            "workProfilePasswordMinNonLetterCharacters": n => { this.workProfilePasswordMinNonLetterCharacters = n.getNumberValue(); },
            "workProfilePasswordMinNumericCharacters": n => { this.workProfilePasswordMinNumericCharacters = n.getNumberValue(); },
            "workProfilePasswordMinSymbolCharacters": n => { this.workProfilePasswordMinSymbolCharacters = n.getNumberValue(); },
            "workProfilePasswordMinUpperCaseCharacters": n => { this.workProfilePasswordMinUpperCaseCharacters = n.getNumberValue(); },
            "workProfilePasswordMinutesOfInactivityBeforeScreenTimeout": n => { this.workProfilePasswordMinutesOfInactivityBeforeScreenTimeout = n.getNumberValue(); },
            "workProfilePasswordPreviousPasswordBlockCount": n => { this.workProfilePasswordPreviousPasswordBlockCount = n.getNumberValue(); },
            "workProfilePasswordRequiredType": n => { this.workProfilePasswordRequiredType = n.getEnumValue<AndroidWorkProfileRequiredPasswordType>(AndroidWorkProfileRequiredPasswordType); },
            "workProfilePasswordSignInFailureCountBeforeFactoryReset": n => { this.workProfilePasswordSignInFailureCountBeforeFactoryReset = n.getNumberValue(); },
            "workProfileRequirePassword": n => { this.workProfileRequirePassword = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.passwordBlockFingerprintUnlock){
            writer.writeBooleanValue("passwordBlockFingerprintUnlock", this.passwordBlockFingerprintUnlock);
        }
        if(this.passwordBlockTrustAgents){
            writer.writeBooleanValue("passwordBlockTrustAgents", this.passwordBlockTrustAgents);
        }
        if(this.passwordExpirationDays){
            writer.writeNumberValue("passwordExpirationDays", this.passwordExpirationDays);
        }
        if(this.passwordMinimumLength){
            writer.writeNumberValue("passwordMinimumLength", this.passwordMinimumLength);
        }
        if(this.passwordMinutesOfInactivityBeforeScreenTimeout){
            writer.writeNumberValue("passwordMinutesOfInactivityBeforeScreenTimeout", this.passwordMinutesOfInactivityBeforeScreenTimeout);
        }
        if(this.passwordPreviousPasswordBlockCount){
            writer.writeNumberValue("passwordPreviousPasswordBlockCount", this.passwordPreviousPasswordBlockCount);
        }
        if(this.passwordRequiredType){
            writer.writeEnumValue<AndroidWorkProfileRequiredPasswordType>("passwordRequiredType", this.passwordRequiredType);
        }
        if(this.passwordSignInFailureCountBeforeFactoryReset){
            writer.writeNumberValue("passwordSignInFailureCountBeforeFactoryReset", this.passwordSignInFailureCountBeforeFactoryReset);
        }
        if(this.securityRequireVerifyApps){
            writer.writeBooleanValue("securityRequireVerifyApps", this.securityRequireVerifyApps);
        }
        if(this.workProfileBlockAddingAccounts){
            writer.writeBooleanValue("workProfileBlockAddingAccounts", this.workProfileBlockAddingAccounts);
        }
        if(this.workProfileBlockCamera){
            writer.writeBooleanValue("workProfileBlockCamera", this.workProfileBlockCamera);
        }
        if(this.workProfileBlockCrossProfileCallerId){
            writer.writeBooleanValue("workProfileBlockCrossProfileCallerId", this.workProfileBlockCrossProfileCallerId);
        }
        if(this.workProfileBlockCrossProfileContactsSearch){
            writer.writeBooleanValue("workProfileBlockCrossProfileContactsSearch", this.workProfileBlockCrossProfileContactsSearch);
        }
        if(this.workProfileBlockCrossProfileCopyPaste){
            writer.writeBooleanValue("workProfileBlockCrossProfileCopyPaste", this.workProfileBlockCrossProfileCopyPaste);
        }
        if(this.workProfileBlockNotificationsWhileDeviceLocked){
            writer.writeBooleanValue("workProfileBlockNotificationsWhileDeviceLocked", this.workProfileBlockNotificationsWhileDeviceLocked);
        }
        if(this.workProfileBlockScreenCapture){
            writer.writeBooleanValue("workProfileBlockScreenCapture", this.workProfileBlockScreenCapture);
        }
        if(this.workProfileBluetoothEnableContactSharing){
            writer.writeBooleanValue("workProfileBluetoothEnableContactSharing", this.workProfileBluetoothEnableContactSharing);
        }
        if(this.workProfileDataSharingType){
            writer.writeEnumValue<AndroidWorkProfileCrossProfileDataSharingType>("workProfileDataSharingType", this.workProfileDataSharingType);
        }
        if(this.workProfileDefaultAppPermissionPolicy){
            writer.writeEnumValue<AndroidWorkProfileDefaultAppPermissionPolicyType>("workProfileDefaultAppPermissionPolicy", this.workProfileDefaultAppPermissionPolicy);
        }
        if(this.workProfilePasswordBlockFingerprintUnlock){
            writer.writeBooleanValue("workProfilePasswordBlockFingerprintUnlock", this.workProfilePasswordBlockFingerprintUnlock);
        }
        if(this.workProfilePasswordBlockTrustAgents){
            writer.writeBooleanValue("workProfilePasswordBlockTrustAgents", this.workProfilePasswordBlockTrustAgents);
        }
        if(this.workProfilePasswordExpirationDays){
            writer.writeNumberValue("workProfilePasswordExpirationDays", this.workProfilePasswordExpirationDays);
        }
        if(this.workProfilePasswordMinimumLength){
            writer.writeNumberValue("workProfilePasswordMinimumLength", this.workProfilePasswordMinimumLength);
        }
        if(this.workProfilePasswordMinLetterCharacters){
            writer.writeNumberValue("workProfilePasswordMinLetterCharacters", this.workProfilePasswordMinLetterCharacters);
        }
        if(this.workProfilePasswordMinLowerCaseCharacters){
            writer.writeNumberValue("workProfilePasswordMinLowerCaseCharacters", this.workProfilePasswordMinLowerCaseCharacters);
        }
        if(this.workProfilePasswordMinNonLetterCharacters){
            writer.writeNumberValue("workProfilePasswordMinNonLetterCharacters", this.workProfilePasswordMinNonLetterCharacters);
        }
        if(this.workProfilePasswordMinNumericCharacters){
            writer.writeNumberValue("workProfilePasswordMinNumericCharacters", this.workProfilePasswordMinNumericCharacters);
        }
        if(this.workProfilePasswordMinSymbolCharacters){
            writer.writeNumberValue("workProfilePasswordMinSymbolCharacters", this.workProfilePasswordMinSymbolCharacters);
        }
        if(this.workProfilePasswordMinUpperCaseCharacters){
            writer.writeNumberValue("workProfilePasswordMinUpperCaseCharacters", this.workProfilePasswordMinUpperCaseCharacters);
        }
        if(this.workProfilePasswordMinutesOfInactivityBeforeScreenTimeout){
            writer.writeNumberValue("workProfilePasswordMinutesOfInactivityBeforeScreenTimeout", this.workProfilePasswordMinutesOfInactivityBeforeScreenTimeout);
        }
        if(this.workProfilePasswordPreviousPasswordBlockCount){
            writer.writeNumberValue("workProfilePasswordPreviousPasswordBlockCount", this.workProfilePasswordPreviousPasswordBlockCount);
        }
        if(this.workProfilePasswordRequiredType){
            writer.writeEnumValue<AndroidWorkProfileRequiredPasswordType>("workProfilePasswordRequiredType", this.workProfilePasswordRequiredType);
        }
        if(this.workProfilePasswordSignInFailureCountBeforeFactoryReset){
            writer.writeNumberValue("workProfilePasswordSignInFailureCountBeforeFactoryReset", this.workProfilePasswordSignInFailureCountBeforeFactoryReset);
        }
        if(this.workProfileRequirePassword){
            writer.writeBooleanValue("workProfileRequirePassword", this.workProfileRequirePassword);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
