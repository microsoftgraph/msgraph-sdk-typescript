import {AndroidWorkProfileCrossProfileDataSharingType} from './androidWorkProfileCrossProfileDataSharingType';
import {AndroidWorkProfileDefaultAppPermissionPolicyType} from './androidWorkProfileDefaultAppPermissionPolicyType';
import {AndroidWorkProfileGeneralDeviceConfiguration} from './androidWorkProfileGeneralDeviceConfiguration';
import {AndroidWorkProfileRequiredPasswordType} from './androidWorkProfileRequiredPasswordType';
import {serializeDeviceConfiguration} from './serializeDeviceConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAndroidWorkProfileGeneralDeviceConfiguration(writer: SerializationWriter, androidWorkProfileGeneralDeviceConfiguration: AndroidWorkProfileGeneralDeviceConfiguration | undefined = {} as AndroidWorkProfileGeneralDeviceConfiguration) : void {
        serializeDeviceConfiguration(writer, androidWorkProfileGeneralDeviceConfiguration)
        writer.writeBooleanValue("passwordBlockFingerprintUnlock", androidWorkProfileGeneralDeviceConfiguration.passwordBlockFingerprintUnlock);
        writer.writeBooleanValue("passwordBlockTrustAgents", androidWorkProfileGeneralDeviceConfiguration.passwordBlockTrustAgents);
        writer.writeNumberValue("passwordExpirationDays", androidWorkProfileGeneralDeviceConfiguration.passwordExpirationDays);
        writer.writeNumberValue("passwordMinimumLength", androidWorkProfileGeneralDeviceConfiguration.passwordMinimumLength);
        writer.writeNumberValue("passwordMinutesOfInactivityBeforeScreenTimeout", androidWorkProfileGeneralDeviceConfiguration.passwordMinutesOfInactivityBeforeScreenTimeout);
        writer.writeNumberValue("passwordPreviousPasswordBlockCount", androidWorkProfileGeneralDeviceConfiguration.passwordPreviousPasswordBlockCount);
        writer.writeEnumValue<AndroidWorkProfileRequiredPasswordType>("passwordRequiredType", androidWorkProfileGeneralDeviceConfiguration.passwordRequiredType);
        writer.writeNumberValue("passwordSignInFailureCountBeforeFactoryReset", androidWorkProfileGeneralDeviceConfiguration.passwordSignInFailureCountBeforeFactoryReset);
        writer.writeBooleanValue("securityRequireVerifyApps", androidWorkProfileGeneralDeviceConfiguration.securityRequireVerifyApps);
        writer.writeBooleanValue("workProfileBlockAddingAccounts", androidWorkProfileGeneralDeviceConfiguration.workProfileBlockAddingAccounts);
        writer.writeBooleanValue("workProfileBlockCamera", androidWorkProfileGeneralDeviceConfiguration.workProfileBlockCamera);
        writer.writeBooleanValue("workProfileBlockCrossProfileCallerId", androidWorkProfileGeneralDeviceConfiguration.workProfileBlockCrossProfileCallerId);
        writer.writeBooleanValue("workProfileBlockCrossProfileContactsSearch", androidWorkProfileGeneralDeviceConfiguration.workProfileBlockCrossProfileContactsSearch);
        writer.writeBooleanValue("workProfileBlockCrossProfileCopyPaste", androidWorkProfileGeneralDeviceConfiguration.workProfileBlockCrossProfileCopyPaste);
        writer.writeBooleanValue("workProfileBlockNotificationsWhileDeviceLocked", androidWorkProfileGeneralDeviceConfiguration.workProfileBlockNotificationsWhileDeviceLocked);
        writer.writeBooleanValue("workProfileBlockScreenCapture", androidWorkProfileGeneralDeviceConfiguration.workProfileBlockScreenCapture);
        writer.writeBooleanValue("workProfileBluetoothEnableContactSharing", androidWorkProfileGeneralDeviceConfiguration.workProfileBluetoothEnableContactSharing);
        writer.writeEnumValue<AndroidWorkProfileCrossProfileDataSharingType>("workProfileDataSharingType", androidWorkProfileGeneralDeviceConfiguration.workProfileDataSharingType);
        writer.writeEnumValue<AndroidWorkProfileDefaultAppPermissionPolicyType>("workProfileDefaultAppPermissionPolicy", androidWorkProfileGeneralDeviceConfiguration.workProfileDefaultAppPermissionPolicy);
        writer.writeBooleanValue("workProfilePasswordBlockFingerprintUnlock", androidWorkProfileGeneralDeviceConfiguration.workProfilePasswordBlockFingerprintUnlock);
        writer.writeBooleanValue("workProfilePasswordBlockTrustAgents", androidWorkProfileGeneralDeviceConfiguration.workProfilePasswordBlockTrustAgents);
        writer.writeNumberValue("workProfilePasswordExpirationDays", androidWorkProfileGeneralDeviceConfiguration.workProfilePasswordExpirationDays);
        writer.writeNumberValue("workProfilePasswordMinimumLength", androidWorkProfileGeneralDeviceConfiguration.workProfilePasswordMinimumLength);
        writer.writeNumberValue("workProfilePasswordMinLetterCharacters", androidWorkProfileGeneralDeviceConfiguration.workProfilePasswordMinLetterCharacters);
        writer.writeNumberValue("workProfilePasswordMinLowerCaseCharacters", androidWorkProfileGeneralDeviceConfiguration.workProfilePasswordMinLowerCaseCharacters);
        writer.writeNumberValue("workProfilePasswordMinNonLetterCharacters", androidWorkProfileGeneralDeviceConfiguration.workProfilePasswordMinNonLetterCharacters);
        writer.writeNumberValue("workProfilePasswordMinNumericCharacters", androidWorkProfileGeneralDeviceConfiguration.workProfilePasswordMinNumericCharacters);
        writer.writeNumberValue("workProfilePasswordMinSymbolCharacters", androidWorkProfileGeneralDeviceConfiguration.workProfilePasswordMinSymbolCharacters);
        writer.writeNumberValue("workProfilePasswordMinUpperCaseCharacters", androidWorkProfileGeneralDeviceConfiguration.workProfilePasswordMinUpperCaseCharacters);
        writer.writeNumberValue("workProfilePasswordMinutesOfInactivityBeforeScreenTimeout", androidWorkProfileGeneralDeviceConfiguration.workProfilePasswordMinutesOfInactivityBeforeScreenTimeout);
        writer.writeNumberValue("workProfilePasswordPreviousPasswordBlockCount", androidWorkProfileGeneralDeviceConfiguration.workProfilePasswordPreviousPasswordBlockCount);
        writer.writeEnumValue<AndroidWorkProfileRequiredPasswordType>("workProfilePasswordRequiredType", androidWorkProfileGeneralDeviceConfiguration.workProfilePasswordRequiredType);
        writer.writeNumberValue("workProfilePasswordSignInFailureCountBeforeFactoryReset", androidWorkProfileGeneralDeviceConfiguration.workProfilePasswordSignInFailureCountBeforeFactoryReset);
        writer.writeBooleanValue("workProfileRequirePassword", androidWorkProfileGeneralDeviceConfiguration.workProfileRequirePassword);
}
