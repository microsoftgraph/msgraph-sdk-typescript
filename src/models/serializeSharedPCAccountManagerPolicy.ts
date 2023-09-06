import { SharedPCAccountDeletionPolicyType } from './sharedPCAccountDeletionPolicyType';
import { type SharedPCAccountManagerPolicy } from './sharedPCAccountManagerPolicy';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSharedPCAccountManagerPolicy(writer: SerializationWriter, sharedPCAccountManagerPolicy: SharedPCAccountManagerPolicy | undefined = {} as SharedPCAccountManagerPolicy) : void {
        writer.writeEnumValue<SharedPCAccountDeletionPolicyType>("accountDeletionPolicy", sharedPCAccountManagerPolicy.accountDeletionPolicy);
        writer.writeNumberValue("cacheAccountsAboveDiskFreePercentage", sharedPCAccountManagerPolicy.cacheAccountsAboveDiskFreePercentage);
        writer.writeNumberValue("inactiveThresholdDays", sharedPCAccountManagerPolicy.inactiveThresholdDays);
        writer.writeStringValue("@odata.type", sharedPCAccountManagerPolicy.odataType);
        writer.writeNumberValue("removeAccountsBelowDiskFreePercentage", sharedPCAccountManagerPolicy.removeAccountsBelowDiskFreePercentage);
        writer.writeAdditionalData(sharedPCAccountManagerPolicy.additionalData);
}
