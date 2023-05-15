import {createSharedPCAccountManagerPolicyFromDiscriminatorValue} from './createSharedPCAccountManagerPolicyFromDiscriminatorValue';
import {deserializeIntoDeviceConfiguration} from './deserializeIntoDeviceConfiguration';
import {serializeSharedPCAccountManagerPolicy} from './serializeSharedPCAccountManagerPolicy';
import {SharedPCAccountManagerPolicy} from './sharedPCAccountManagerPolicy';
import {SharedPCAllowedAccountType} from './sharedPCAllowedAccountType';
import {SharedPCConfiguration} from './sharedPCConfiguration';
import {Parsable, ParseNode, SerializationWriter, TimeOnly} from '@microsoft/kiota-abstractions';

export function deserializeIntoSharedPCConfiguration(sharedPCConfiguration: SharedPCConfiguration | undefined = {} as SharedPCConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceConfiguration(sharedPCConfiguration),
        "accountManagerPolicy": n => { sharedPCConfiguration.accountManagerPolicy = n.getObjectValue<SharedPCAccountManagerPolicy>(createSharedPCAccountManagerPolicyFromDiscriminatorValue); },
        "allowedAccounts": n => { sharedPCConfiguration.allowedAccounts = n.getEnumValue<SharedPCAllowedAccountType>(SharedPCAllowedAccountType); },
        "allowLocalStorage": n => { sharedPCConfiguration.allowLocalStorage = n.getBooleanValue(); },
        "disableAccountManager": n => { sharedPCConfiguration.disableAccountManager = n.getBooleanValue(); },
        "disableEduPolicies": n => { sharedPCConfiguration.disableEduPolicies = n.getBooleanValue(); },
        "disablePowerPolicies": n => { sharedPCConfiguration.disablePowerPolicies = n.getBooleanValue(); },
        "disableSignInOnResume": n => { sharedPCConfiguration.disableSignInOnResume = n.getBooleanValue(); },
        "enabled": n => { sharedPCConfiguration.enabled = n.getBooleanValue(); },
        "idleTimeBeforeSleepInSeconds": n => { sharedPCConfiguration.idleTimeBeforeSleepInSeconds = n.getNumberValue(); },
        "kioskAppDisplayName": n => { sharedPCConfiguration.kioskAppDisplayName = n.getStringValue(); },
        "kioskAppUserModelId": n => { sharedPCConfiguration.kioskAppUserModelId = n.getStringValue(); },
        "maintenanceStartTime": n => { sharedPCConfiguration.maintenanceStartTime = n.getTimeOnlyValue(); },
    }
}
