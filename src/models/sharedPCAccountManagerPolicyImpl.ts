import {SharedPCAccountDeletionPolicyType} from './sharedPCAccountDeletionPolicyType';
import {SharedPCAccountManagerPolicy} from './sharedPCAccountManagerPolicy';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** SharedPC Account Manager Policy. Only applies when the account manager is enabled. */
export class SharedPCAccountManagerPolicyImpl implements SharedPCAccountManagerPolicy {
    /** Configures when accounts are deleted. Possible values are: immediate, diskSpaceThreshold, diskSpaceThresholdOrInactiveThreshold. */
    public accountDeletionPolicy?: SharedPCAccountDeletionPolicyType | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Sets the percentage of available disk space a PC should have before it stops deleting cached shared PC accounts. Only applies when AccountDeletionPolicy is DiskSpaceThreshold or DiskSpaceThresholdOrInactiveThreshold. Valid values 0 to 100 */
    public cacheAccountsAboveDiskFreePercentage?: number | undefined;
    /** Specifies when the accounts will start being deleted when they have not been logged on during the specified period, given as number of days. Only applies when AccountDeletionPolicy is DiskSpaceThreshold or DiskSpaceThresholdOrInactiveThreshold. */
    public inactiveThresholdDays?: number | undefined;
    /** Sets the percentage of disk space remaining on a PC before cached accounts will be deleted to free disk space. Accounts that have been inactive the longest will be deleted first. Only applies when AccountDeletionPolicy is DiskSpaceThresholdOrInactiveThreshold. Valid values 0 to 100 */
    public removeAccountsBelowDiskFreePercentage?: number | undefined;
    /**
     * Instantiates a new sharedPCAccountManagerPolicy and sets the default values.
     * @param sharedPCAccountManagerPolicyParameterValue 
     */
    public constructor(sharedPCAccountManagerPolicyParameterValue?: SharedPCAccountManagerPolicy | undefined) {
        this.accountDeletionPolicy = sharedPCAccountManagerPolicyParameterValue?.accountDeletionPolicy;
        this.additionalData = sharedPCAccountManagerPolicyParameterValue?.additionalData ? sharedPCAccountManagerPolicyParameterValue?.additionalData! : {};
        this.cacheAccountsAboveDiskFreePercentage = sharedPCAccountManagerPolicyParameterValue?.cacheAccountsAboveDiskFreePercentage;
        this.inactiveThresholdDays = sharedPCAccountManagerPolicyParameterValue?.inactiveThresholdDays;
        this.removeAccountsBelowDiskFreePercentage = sharedPCAccountManagerPolicyParameterValue?.removeAccountsBelowDiskFreePercentage;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "accountDeletionPolicy": n => { this.accountDeletionPolicy = n.getEnumValue<SharedPCAccountDeletionPolicyType>(SharedPCAccountDeletionPolicyType); },
            "cacheAccountsAboveDiskFreePercentage": n => { this.cacheAccountsAboveDiskFreePercentage = n.getNumberValue(); },
            "inactiveThresholdDays": n => { this.inactiveThresholdDays = n.getNumberValue(); },
            "removeAccountsBelowDiskFreePercentage": n => { this.removeAccountsBelowDiskFreePercentage = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.accountDeletionPolicy){
            writer.writeEnumValue<SharedPCAccountDeletionPolicyType>("accountDeletionPolicy", this.accountDeletionPolicy);
        }
        if(this.cacheAccountsAboveDiskFreePercentage){
            writer.writeNumberValue("cacheAccountsAboveDiskFreePercentage", this.cacheAccountsAboveDiskFreePercentage);
        }
        if(this.inactiveThresholdDays){
            writer.writeNumberValue("inactiveThresholdDays", this.inactiveThresholdDays);
        }
        if(this.removeAccountsBelowDiskFreePercentage){
            writer.writeNumberValue("removeAccountsBelowDiskFreePercentage", this.removeAccountsBelowDiskFreePercentage);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
