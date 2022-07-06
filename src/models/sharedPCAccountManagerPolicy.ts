import {SharedPCAccountDeletionPolicyType} from './sharedPCAccountDeletionPolicyType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** SharedPC Account Manager Policy. Only applies when the account manager is enabled. */
export class SharedPCAccountManagerPolicy implements AdditionalDataHolder, Parsable {
    /** Configures when accounts are deleted. Possible values are: immediate, diskSpaceThreshold, diskSpaceThresholdOrInactiveThreshold. */
    private _accountDeletionPolicy?: SharedPCAccountDeletionPolicyType | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Sets the percentage of available disk space a PC should have before it stops deleting cached shared PC accounts. Only applies when AccountDeletionPolicy is DiskSpaceThreshold or DiskSpaceThresholdOrInactiveThreshold. Valid values 0 to 100 */
    private _cacheAccountsAboveDiskFreePercentage?: number | undefined;
    /** Specifies when the accounts will start being deleted when they have not been logged on during the specified period, given as number of days. Only applies when AccountDeletionPolicy is DiskSpaceThreshold or DiskSpaceThresholdOrInactiveThreshold. */
    private _inactiveThresholdDays?: number | undefined;
    /** Sets the percentage of disk space remaining on a PC before cached accounts will be deleted to free disk space. Accounts that have been inactive the longest will be deleted first. Only applies when AccountDeletionPolicy is DiskSpaceThresholdOrInactiveThreshold. Valid values 0 to 100 */
    private _removeAccountsBelowDiskFreePercentage?: number | undefined;
    /**
     * Gets the accountDeletionPolicy property value. Configures when accounts are deleted. Possible values are: immediate, diskSpaceThreshold, diskSpaceThresholdOrInactiveThreshold.
     * @returns a sharedPCAccountDeletionPolicyType
     */
    public get accountDeletionPolicy() {
        return this._accountDeletionPolicy;
    };
    /**
     * Sets the accountDeletionPolicy property value. Configures when accounts are deleted. Possible values are: immediate, diskSpaceThreshold, diskSpaceThresholdOrInactiveThreshold.
     * @param value Value to set for the accountDeletionPolicy property.
     */
    public set accountDeletionPolicy(value: SharedPCAccountDeletionPolicyType | undefined) {
        this._accountDeletionPolicy = value;
    };
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Gets the cacheAccountsAboveDiskFreePercentage property value. Sets the percentage of available disk space a PC should have before it stops deleting cached shared PC accounts. Only applies when AccountDeletionPolicy is DiskSpaceThreshold or DiskSpaceThresholdOrInactiveThreshold. Valid values 0 to 100
     * @returns a integer
     */
    public get cacheAccountsAboveDiskFreePercentage() {
        return this._cacheAccountsAboveDiskFreePercentage;
    };
    /**
     * Sets the cacheAccountsAboveDiskFreePercentage property value. Sets the percentage of available disk space a PC should have before it stops deleting cached shared PC accounts. Only applies when AccountDeletionPolicy is DiskSpaceThreshold or DiskSpaceThresholdOrInactiveThreshold. Valid values 0 to 100
     * @param value Value to set for the cacheAccountsAboveDiskFreePercentage property.
     */
    public set cacheAccountsAboveDiskFreePercentage(value: number | undefined) {
        this._cacheAccountsAboveDiskFreePercentage = value;
    };
    /**
     * Instantiates a new sharedPCAccountManagerPolicy and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
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
     * Gets the inactiveThresholdDays property value. Specifies when the accounts will start being deleted when they have not been logged on during the specified period, given as number of days. Only applies when AccountDeletionPolicy is DiskSpaceThreshold or DiskSpaceThresholdOrInactiveThreshold.
     * @returns a integer
     */
    public get inactiveThresholdDays() {
        return this._inactiveThresholdDays;
    };
    /**
     * Sets the inactiveThresholdDays property value. Specifies when the accounts will start being deleted when they have not been logged on during the specified period, given as number of days. Only applies when AccountDeletionPolicy is DiskSpaceThreshold or DiskSpaceThresholdOrInactiveThreshold.
     * @param value Value to set for the inactiveThresholdDays property.
     */
    public set inactiveThresholdDays(value: number | undefined) {
        this._inactiveThresholdDays = value;
    };
    /**
     * Gets the removeAccountsBelowDiskFreePercentage property value. Sets the percentage of disk space remaining on a PC before cached accounts will be deleted to free disk space. Accounts that have been inactive the longest will be deleted first. Only applies when AccountDeletionPolicy is DiskSpaceThresholdOrInactiveThreshold. Valid values 0 to 100
     * @returns a integer
     */
    public get removeAccountsBelowDiskFreePercentage() {
        return this._removeAccountsBelowDiskFreePercentage;
    };
    /**
     * Sets the removeAccountsBelowDiskFreePercentage property value. Sets the percentage of disk space remaining on a PC before cached accounts will be deleted to free disk space. Accounts that have been inactive the longest will be deleted first. Only applies when AccountDeletionPolicy is DiskSpaceThresholdOrInactiveThreshold. Valid values 0 to 100
     * @param value Value to set for the removeAccountsBelowDiskFreePercentage property.
     */
    public set removeAccountsBelowDiskFreePercentage(value: number | undefined) {
        this._removeAccountsBelowDiskFreePercentage = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<SharedPCAccountDeletionPolicyType>("accountDeletionPolicy", this.accountDeletionPolicy);
        writer.writeNumberValue("cacheAccountsAboveDiskFreePercentage", this.cacheAccountsAboveDiskFreePercentage);
        writer.writeNumberValue("inactiveThresholdDays", this.inactiveThresholdDays);
        writer.writeNumberValue("removeAccountsBelowDiskFreePercentage", this.removeAccountsBelowDiskFreePercentage);
        writer.writeAdditionalData(this.additionalData);
    };
}
