import {SharedPCAccountDeletionPolicyType} from './sharedPCAccountDeletionPolicyType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SharedPCAccountManagerPolicy extends AdditionalDataHolder, Parsable {
    /**
     * Possible values for when accounts are deleted on a shared PC.
     */
    accountDeletionPolicy?: SharedPCAccountDeletionPolicyType | undefined;
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Sets the percentage of available disk space a PC should have before it stops deleting cached shared PC accounts. Only applies when AccountDeletionPolicy is DiskSpaceThreshold or DiskSpaceThresholdOrInactiveThreshold. Valid values 0 to 100
     */
    cacheAccountsAboveDiskFreePercentage?: number | undefined;
    /**
     * Specifies when the accounts will start being deleted when they have not been logged on during the specified period, given as number of days. Only applies when AccountDeletionPolicy is DiskSpaceThreshold or DiskSpaceThresholdOrInactiveThreshold.
     */
    inactiveThresholdDays?: number | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Sets the percentage of disk space remaining on a PC before cached accounts will be deleted to free disk space. Accounts that have been inactive the longest will be deleted first. Only applies when AccountDeletionPolicy is DiskSpaceThresholdOrInactiveThreshold. Valid values 0 to 100
     */
    removeAccountsBelowDiskFreePercentage?: number | undefined;
}
