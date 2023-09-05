import { SharedPCAccountDeletionPolicyType } from './sharedPCAccountDeletionPolicyType';
import { type SharedPCAccountManagerPolicy } from './sharedPCAccountManagerPolicy';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSharedPCAccountManagerPolicy(sharedPCAccountManagerPolicy: SharedPCAccountManagerPolicy | undefined = {} as SharedPCAccountManagerPolicy) : Record<string, (node: ParseNode) => void> {
    return {
        "accountDeletionPolicy": n => { sharedPCAccountManagerPolicy.accountDeletionPolicy = n.getEnumValue<SharedPCAccountDeletionPolicyType>(SharedPCAccountDeletionPolicyType); },
        "cacheAccountsAboveDiskFreePercentage": n => { sharedPCAccountManagerPolicy.cacheAccountsAboveDiskFreePercentage = n.getNumberValue(); },
        "inactiveThresholdDays": n => { sharedPCAccountManagerPolicy.inactiveThresholdDays = n.getNumberValue(); },
        "@odata.type": n => { sharedPCAccountManagerPolicy.odataType = n.getStringValue(); },
        "removeAccountsBelowDiskFreePercentage": n => { sharedPCAccountManagerPolicy.removeAccountsBelowDiskFreePercentage = n.getNumberValue(); },
    }
}
