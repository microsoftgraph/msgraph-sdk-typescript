import {AndroidWorkProfileCrossProfileDataSharingType} from './androidWorkProfileCrossProfileDataSharingType';
import {AndroidWorkProfileDefaultAppPermissionPolicyType} from './androidWorkProfileDefaultAppPermissionPolicyType';
import {AndroidWorkProfileGeneralDeviceConfiguration} from './androidWorkProfileGeneralDeviceConfiguration';
import {AndroidWorkProfileRequiredPasswordType} from './androidWorkProfileRequiredPasswordType';
import {deserializeIntoDeviceConfiguration} from './deserializeIntoDeviceConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAndroidWorkProfileGeneralDeviceConfiguration(androidWorkProfileGeneralDeviceConfiguration: AndroidWorkProfileGeneralDeviceConfiguration | undefined = {} as AndroidWorkProfileGeneralDeviceConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceConfiguration(androidWorkProfileGeneralDeviceConfiguration),
        "passwordBlockFingerprintUnlock": n => { androidWorkProfileGeneralDeviceConfiguration.passwordBlockFingerprintUnlock = n.getBooleanValue(); },
        "passwordBlockTrustAgents": n => { androidWorkProfileGeneralDeviceConfiguration.passwordBlockTrustAgents = n.getBooleanValue(); },
        "passwordExpirationDays": n => { androidWorkProfileGeneralDeviceConfiguration.passwordExpirationDays = n.getNumberValue(); },
        "passwordMinimumLength": n => { androidWorkProfileGeneralDeviceConfiguration.passwordMinimumLength = n.getNumberValue(); },
        "passwordMinutesOfInactivityBeforeScreenTimeout": n => { androidWorkProfileGeneralDeviceConfiguration.passwordMinutesOfInactivityBeforeScreenTimeout = n.getNumberValue(); },
        "passwordPreviousPasswordBlockCount": n => { androidWorkProfileGeneralDeviceConfiguration.passwordPreviousPasswordBlockCount = n.getNumberValue(); },
        "passwordRequiredType": n => { androidWorkProfileGeneralDeviceConfiguration.passwordRequiredType = n.getEnumValue<AndroidWorkProfileRequiredPasswordType>(AndroidWorkProfileRequiredPasswordType); },
        "passwordSignInFailureCountBeforeFactoryReset": n => { androidWorkProfileGeneralDeviceConfiguration.passwordSignInFailureCountBeforeFactoryReset = n.getNumberValue(); },
        "securityRequireVerifyApps": n => { androidWorkProfileGeneralDeviceConfiguration.securityRequireVerifyApps = n.getBooleanValue(); },
        "workProfileBlockAddingAccounts": n => { androidWorkProfileGeneralDeviceConfiguration.workProfileBlockAddingAccounts = n.getBooleanValue(); },
        "workProfileBlockCamera": n => { androidWorkProfileGeneralDeviceConfiguration.workProfileBlockCamera = n.getBooleanValue(); },
        "workProfileBlockCrossProfileCallerId": n => { androidWorkProfileGeneralDeviceConfiguration.workProfileBlockCrossProfileCallerId = n.getBooleanValue(); },
        "workProfileBlockCrossProfileContactsSearch": n => { androidWorkProfileGeneralDeviceConfiguration.workProfileBlockCrossProfileContactsSearch = n.getBooleanValue(); },
        "workProfileBlockCrossProfileCopyPaste": n => { androidWorkProfileGeneralDeviceConfiguration.workProfileBlockCrossProfileCopyPaste = n.getBooleanValue(); },
        "workProfileBlockNotificationsWhileDeviceLocked": n => { androidWorkProfileGeneralDeviceConfiguration.workProfileBlockNotificationsWhileDeviceLocked = n.getBooleanValue(); },
        "workProfileBlockScreenCapture": n => { androidWorkProfileGeneralDeviceConfiguration.workProfileBlockScreenCapture = n.getBooleanValue(); },
        "workProfileBluetoothEnableContactSharing": n => { androidWorkProfileGeneralDeviceConfiguration.workProfileBluetoothEnableContactSharing = n.getBooleanValue(); },
        "workProfileDataSharingType": n => { androidWorkProfileGeneralDeviceConfiguration.workProfileDataSharingType = n.getEnumValue<AndroidWorkProfileCrossProfileDataSharingType>(AndroidWorkProfileCrossProfileDataSharingType); },
        "workProfileDefaultAppPermissionPolicy": n => { androidWorkProfileGeneralDeviceConfiguration.workProfileDefaultAppPermissionPolicy = n.getEnumValue<AndroidWorkProfileDefaultAppPermissionPolicyType>(AndroidWorkProfileDefaultAppPermissionPolicyType); },
        "workProfilePasswordBlockFingerprintUnlock": n => { androidWorkProfileGeneralDeviceConfiguration.workProfilePasswordBlockFingerprintUnlock = n.getBooleanValue(); },
        "workProfilePasswordBlockTrustAgents": n => { androidWorkProfileGeneralDeviceConfiguration.workProfilePasswordBlockTrustAgents = n.getBooleanValue(); },
        "workProfilePasswordExpirationDays": n => { androidWorkProfileGeneralDeviceConfiguration.workProfilePasswordExpirationDays = n.getNumberValue(); },
        "workProfilePasswordMinimumLength": n => { androidWorkProfileGeneralDeviceConfiguration.workProfilePasswordMinimumLength = n.getNumberValue(); },
        "workProfilePasswordMinLetterCharacters": n => { androidWorkProfileGeneralDeviceConfiguration.workProfilePasswordMinLetterCharacters = n.getNumberValue(); },
        "workProfilePasswordMinLowerCaseCharacters": n => { androidWorkProfileGeneralDeviceConfiguration.workProfilePasswordMinLowerCaseCharacters = n.getNumberValue(); },
        "workProfilePasswordMinNonLetterCharacters": n => { androidWorkProfileGeneralDeviceConfiguration.workProfilePasswordMinNonLetterCharacters = n.getNumberValue(); },
        "workProfilePasswordMinNumericCharacters": n => { androidWorkProfileGeneralDeviceConfiguration.workProfilePasswordMinNumericCharacters = n.getNumberValue(); },
        "workProfilePasswordMinSymbolCharacters": n => { androidWorkProfileGeneralDeviceConfiguration.workProfilePasswordMinSymbolCharacters = n.getNumberValue(); },
        "workProfilePasswordMinUpperCaseCharacters": n => { androidWorkProfileGeneralDeviceConfiguration.workProfilePasswordMinUpperCaseCharacters = n.getNumberValue(); },
        "workProfilePasswordMinutesOfInactivityBeforeScreenTimeout": n => { androidWorkProfileGeneralDeviceConfiguration.workProfilePasswordMinutesOfInactivityBeforeScreenTimeout = n.getNumberValue(); },
        "workProfilePasswordPreviousPasswordBlockCount": n => { androidWorkProfileGeneralDeviceConfiguration.workProfilePasswordPreviousPasswordBlockCount = n.getNumberValue(); },
        "workProfilePasswordRequiredType": n => { androidWorkProfileGeneralDeviceConfiguration.workProfilePasswordRequiredType = n.getEnumValue<AndroidWorkProfileRequiredPasswordType>(AndroidWorkProfileRequiredPasswordType); },
        "workProfilePasswordSignInFailureCountBeforeFactoryReset": n => { androidWorkProfileGeneralDeviceConfiguration.workProfilePasswordSignInFailureCountBeforeFactoryReset = n.getNumberValue(); },
        "workProfileRequirePassword": n => { androidWorkProfileGeneralDeviceConfiguration.workProfileRequirePassword = n.getBooleanValue(); },
    }
}
