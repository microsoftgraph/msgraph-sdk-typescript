import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OnPremisesDirectorySynchronizationFeature implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Used to block cloud object takeover via source anchor hard match if enabled. */
    private _blockCloudObjectTakeoverThroughHardMatchEnabled?: boolean | undefined;
    /** Use to block soft match for all objects if enabled for the  tenant. Customers are encouraged to enable this feature and keep it enabled until soft matching is required again for their tenancy. This flag should be enabled again after any soft matching has been completed and is no longer needed. */
    private _blockSoftMatchEnabled?: boolean | undefined;
    /** When true, persists the values of Mobile and OtherMobile in on-premises AD during sync cycles instead of values of MobilePhone or AlternateMobilePhones in Azure AD. */
    private _bypassDirSyncOverridesEnabled?: boolean | undefined;
    /** Used to indicate that cloud password policy applies to users whose passwords are synchronized from on-premises. */
    private _cloudPasswordPolicyForPasswordSyncedUsersEnabled?: boolean | undefined;
    /** Used to enable concurrent user credentials update in OrgId. */
    private _concurrentCredentialUpdateEnabled?: boolean | undefined;
    /** Used to enable concurrent user creation in OrgId. */
    private _concurrentOrgIdProvisioningEnabled?: boolean | undefined;
    /** Used to indicate that device write-back is enabled. */
    private _deviceWritebackEnabled?: boolean | undefined;
    /** Used to indicate that directory extensions are being synced from on-premises AD to Azure AD. */
    private _directoryExtensionsEnabled?: boolean | undefined;
    /** Used to indicate that for a Microsoft Forefront Online Protection for Exchange (FOPE) migrated tenant, the conflicting proxy address should be migrated over. */
    private _fopeConflictResolutionEnabled?: boolean | undefined;
    /** Used to enable object-level group writeback feature for additional group types. */
    private _groupWriteBackEnabled?: boolean | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Used to indicate on-premise password synchronization is enabled. */
    private _passwordSyncEnabled?: boolean | undefined;
    /** Used to indicate that writeback of password resets from Azure AD to on-premises AD is enabled. */
    private _passwordWritebackEnabled?: boolean | undefined;
    /** Used to indicate that we should quarantine objects with conflicting proxy address. */
    private _quarantineUponProxyAddressesConflictEnabled?: boolean | undefined;
    /** Used to indicate that we should quarantine objects conflicting with duplicate userPrincipalName. */
    private _quarantineUponUpnConflictEnabled?: boolean | undefined;
    /** Used to indicate that we should soft match objects based on userPrincipalName. */
    private _softMatchOnUpnEnabled?: boolean | undefined;
    /** Used to indicate that we should synchronize userPrincipalName objects for managed users with licenses. */
    private _synchronizeUpnForManagedUsersEnabled?: boolean | undefined;
    /** Used to indicate that Microsoft 365 Group write-back is enabled. */
    private _unifiedGroupWritebackEnabled?: boolean | undefined;
    /** Used to indicate that feature to force password change for a user on logon is enabled while synchronizing on-premise credentials. */
    private _userForcePasswordChangeOnLogonEnabled?: boolean | undefined;
    /** Used to indicate that user writeback is enabled. */
    private _userWritebackEnabled?: boolean | undefined;
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
     * Gets the blockCloudObjectTakeoverThroughHardMatchEnabled property value. Used to block cloud object takeover via source anchor hard match if enabled.
     * @returns a boolean
     */
    public get blockCloudObjectTakeoverThroughHardMatchEnabled() {
        return this._blockCloudObjectTakeoverThroughHardMatchEnabled;
    };
    /**
     * Sets the blockCloudObjectTakeoverThroughHardMatchEnabled property value. Used to block cloud object takeover via source anchor hard match if enabled.
     * @param value Value to set for the blockCloudObjectTakeoverThroughHardMatchEnabled property.
     */
    public set blockCloudObjectTakeoverThroughHardMatchEnabled(value: boolean | undefined) {
        this._blockCloudObjectTakeoverThroughHardMatchEnabled = value;
    };
    /**
     * Gets the blockSoftMatchEnabled property value. Use to block soft match for all objects if enabled for the  tenant. Customers are encouraged to enable this feature and keep it enabled until soft matching is required again for their tenancy. This flag should be enabled again after any soft matching has been completed and is no longer needed.
     * @returns a boolean
     */
    public get blockSoftMatchEnabled() {
        return this._blockSoftMatchEnabled;
    };
    /**
     * Sets the blockSoftMatchEnabled property value. Use to block soft match for all objects if enabled for the  tenant. Customers are encouraged to enable this feature and keep it enabled until soft matching is required again for their tenancy. This flag should be enabled again after any soft matching has been completed and is no longer needed.
     * @param value Value to set for the blockSoftMatchEnabled property.
     */
    public set blockSoftMatchEnabled(value: boolean | undefined) {
        this._blockSoftMatchEnabled = value;
    };
    /**
     * Gets the bypassDirSyncOverridesEnabled property value. When true, persists the values of Mobile and OtherMobile in on-premises AD during sync cycles instead of values of MobilePhone or AlternateMobilePhones in Azure AD.
     * @returns a boolean
     */
    public get bypassDirSyncOverridesEnabled() {
        return this._bypassDirSyncOverridesEnabled;
    };
    /**
     * Sets the bypassDirSyncOverridesEnabled property value. When true, persists the values of Mobile and OtherMobile in on-premises AD during sync cycles instead of values of MobilePhone or AlternateMobilePhones in Azure AD.
     * @param value Value to set for the bypassDirSyncOverridesEnabled property.
     */
    public set bypassDirSyncOverridesEnabled(value: boolean | undefined) {
        this._bypassDirSyncOverridesEnabled = value;
    };
    /**
     * Gets the cloudPasswordPolicyForPasswordSyncedUsersEnabled property value. Used to indicate that cloud password policy applies to users whose passwords are synchronized from on-premises.
     * @returns a boolean
     */
    public get cloudPasswordPolicyForPasswordSyncedUsersEnabled() {
        return this._cloudPasswordPolicyForPasswordSyncedUsersEnabled;
    };
    /**
     * Sets the cloudPasswordPolicyForPasswordSyncedUsersEnabled property value. Used to indicate that cloud password policy applies to users whose passwords are synchronized from on-premises.
     * @param value Value to set for the cloudPasswordPolicyForPasswordSyncedUsersEnabled property.
     */
    public set cloudPasswordPolicyForPasswordSyncedUsersEnabled(value: boolean | undefined) {
        this._cloudPasswordPolicyForPasswordSyncedUsersEnabled = value;
    };
    /**
     * Gets the concurrentCredentialUpdateEnabled property value. Used to enable concurrent user credentials update in OrgId.
     * @returns a boolean
     */
    public get concurrentCredentialUpdateEnabled() {
        return this._concurrentCredentialUpdateEnabled;
    };
    /**
     * Sets the concurrentCredentialUpdateEnabled property value. Used to enable concurrent user credentials update in OrgId.
     * @param value Value to set for the concurrentCredentialUpdateEnabled property.
     */
    public set concurrentCredentialUpdateEnabled(value: boolean | undefined) {
        this._concurrentCredentialUpdateEnabled = value;
    };
    /**
     * Gets the concurrentOrgIdProvisioningEnabled property value. Used to enable concurrent user creation in OrgId.
     * @returns a boolean
     */
    public get concurrentOrgIdProvisioningEnabled() {
        return this._concurrentOrgIdProvisioningEnabled;
    };
    /**
     * Sets the concurrentOrgIdProvisioningEnabled property value. Used to enable concurrent user creation in OrgId.
     * @param value Value to set for the concurrentOrgIdProvisioningEnabled property.
     */
    public set concurrentOrgIdProvisioningEnabled(value: boolean | undefined) {
        this._concurrentOrgIdProvisioningEnabled = value;
    };
    /**
     * Instantiates a new onPremisesDirectorySynchronizationFeature and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the deviceWritebackEnabled property value. Used to indicate that device write-back is enabled.
     * @returns a boolean
     */
    public get deviceWritebackEnabled() {
        return this._deviceWritebackEnabled;
    };
    /**
     * Sets the deviceWritebackEnabled property value. Used to indicate that device write-back is enabled.
     * @param value Value to set for the deviceWritebackEnabled property.
     */
    public set deviceWritebackEnabled(value: boolean | undefined) {
        this._deviceWritebackEnabled = value;
    };
    /**
     * Gets the directoryExtensionsEnabled property value. Used to indicate that directory extensions are being synced from on-premises AD to Azure AD.
     * @returns a boolean
     */
    public get directoryExtensionsEnabled() {
        return this._directoryExtensionsEnabled;
    };
    /**
     * Sets the directoryExtensionsEnabled property value. Used to indicate that directory extensions are being synced from on-premises AD to Azure AD.
     * @param value Value to set for the directoryExtensionsEnabled property.
     */
    public set directoryExtensionsEnabled(value: boolean | undefined) {
        this._directoryExtensionsEnabled = value;
    };
    /**
     * Gets the fopeConflictResolutionEnabled property value. Used to indicate that for a Microsoft Forefront Online Protection for Exchange (FOPE) migrated tenant, the conflicting proxy address should be migrated over.
     * @returns a boolean
     */
    public get fopeConflictResolutionEnabled() {
        return this._fopeConflictResolutionEnabled;
    };
    /**
     * Sets the fopeConflictResolutionEnabled property value. Used to indicate that for a Microsoft Forefront Online Protection for Exchange (FOPE) migrated tenant, the conflicting proxy address should be migrated over.
     * @param value Value to set for the fopeConflictResolutionEnabled property.
     */
    public set fopeConflictResolutionEnabled(value: boolean | undefined) {
        this._fopeConflictResolutionEnabled = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "blockCloudObjectTakeoverThroughHardMatchEnabled": n => { this.blockCloudObjectTakeoverThroughHardMatchEnabled = n.getBooleanValue(); },
            "blockSoftMatchEnabled": n => { this.blockSoftMatchEnabled = n.getBooleanValue(); },
            "bypassDirSyncOverridesEnabled": n => { this.bypassDirSyncOverridesEnabled = n.getBooleanValue(); },
            "cloudPasswordPolicyForPasswordSyncedUsersEnabled": n => { this.cloudPasswordPolicyForPasswordSyncedUsersEnabled = n.getBooleanValue(); },
            "concurrentCredentialUpdateEnabled": n => { this.concurrentCredentialUpdateEnabled = n.getBooleanValue(); },
            "concurrentOrgIdProvisioningEnabled": n => { this.concurrentOrgIdProvisioningEnabled = n.getBooleanValue(); },
            "deviceWritebackEnabled": n => { this.deviceWritebackEnabled = n.getBooleanValue(); },
            "directoryExtensionsEnabled": n => { this.directoryExtensionsEnabled = n.getBooleanValue(); },
            "fopeConflictResolutionEnabled": n => { this.fopeConflictResolutionEnabled = n.getBooleanValue(); },
            "groupWriteBackEnabled": n => { this.groupWriteBackEnabled = n.getBooleanValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "passwordSyncEnabled": n => { this.passwordSyncEnabled = n.getBooleanValue(); },
            "passwordWritebackEnabled": n => { this.passwordWritebackEnabled = n.getBooleanValue(); },
            "quarantineUponProxyAddressesConflictEnabled": n => { this.quarantineUponProxyAddressesConflictEnabled = n.getBooleanValue(); },
            "quarantineUponUpnConflictEnabled": n => { this.quarantineUponUpnConflictEnabled = n.getBooleanValue(); },
            "softMatchOnUpnEnabled": n => { this.softMatchOnUpnEnabled = n.getBooleanValue(); },
            "synchronizeUpnForManagedUsersEnabled": n => { this.synchronizeUpnForManagedUsersEnabled = n.getBooleanValue(); },
            "unifiedGroupWritebackEnabled": n => { this.unifiedGroupWritebackEnabled = n.getBooleanValue(); },
            "userForcePasswordChangeOnLogonEnabled": n => { this.userForcePasswordChangeOnLogonEnabled = n.getBooleanValue(); },
            "userWritebackEnabled": n => { this.userWritebackEnabled = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the groupWriteBackEnabled property value. Used to enable object-level group writeback feature for additional group types.
     * @returns a boolean
     */
    public get groupWriteBackEnabled() {
        return this._groupWriteBackEnabled;
    };
    /**
     * Sets the groupWriteBackEnabled property value. Used to enable object-level group writeback feature for additional group types.
     * @param value Value to set for the groupWriteBackEnabled property.
     */
    public set groupWriteBackEnabled(value: boolean | undefined) {
        this._groupWriteBackEnabled = value;
    };
    /**
     * Gets the @odata.type property value. The OdataType property
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. The OdataType property
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Gets the passwordSyncEnabled property value. Used to indicate on-premise password synchronization is enabled.
     * @returns a boolean
     */
    public get passwordSyncEnabled() {
        return this._passwordSyncEnabled;
    };
    /**
     * Sets the passwordSyncEnabled property value. Used to indicate on-premise password synchronization is enabled.
     * @param value Value to set for the passwordSyncEnabled property.
     */
    public set passwordSyncEnabled(value: boolean | undefined) {
        this._passwordSyncEnabled = value;
    };
    /**
     * Gets the passwordWritebackEnabled property value. Used to indicate that writeback of password resets from Azure AD to on-premises AD is enabled.
     * @returns a boolean
     */
    public get passwordWritebackEnabled() {
        return this._passwordWritebackEnabled;
    };
    /**
     * Sets the passwordWritebackEnabled property value. Used to indicate that writeback of password resets from Azure AD to on-premises AD is enabled.
     * @param value Value to set for the passwordWritebackEnabled property.
     */
    public set passwordWritebackEnabled(value: boolean | undefined) {
        this._passwordWritebackEnabled = value;
    };
    /**
     * Gets the quarantineUponProxyAddressesConflictEnabled property value. Used to indicate that we should quarantine objects with conflicting proxy address.
     * @returns a boolean
     */
    public get quarantineUponProxyAddressesConflictEnabled() {
        return this._quarantineUponProxyAddressesConflictEnabled;
    };
    /**
     * Sets the quarantineUponProxyAddressesConflictEnabled property value. Used to indicate that we should quarantine objects with conflicting proxy address.
     * @param value Value to set for the quarantineUponProxyAddressesConflictEnabled property.
     */
    public set quarantineUponProxyAddressesConflictEnabled(value: boolean | undefined) {
        this._quarantineUponProxyAddressesConflictEnabled = value;
    };
    /**
     * Gets the quarantineUponUpnConflictEnabled property value. Used to indicate that we should quarantine objects conflicting with duplicate userPrincipalName.
     * @returns a boolean
     */
    public get quarantineUponUpnConflictEnabled() {
        return this._quarantineUponUpnConflictEnabled;
    };
    /**
     * Sets the quarantineUponUpnConflictEnabled property value. Used to indicate that we should quarantine objects conflicting with duplicate userPrincipalName.
     * @param value Value to set for the quarantineUponUpnConflictEnabled property.
     */
    public set quarantineUponUpnConflictEnabled(value: boolean | undefined) {
        this._quarantineUponUpnConflictEnabled = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("blockCloudObjectTakeoverThroughHardMatchEnabled", this.blockCloudObjectTakeoverThroughHardMatchEnabled);
        writer.writeBooleanValue("blockSoftMatchEnabled", this.blockSoftMatchEnabled);
        writer.writeBooleanValue("bypassDirSyncOverridesEnabled", this.bypassDirSyncOverridesEnabled);
        writer.writeBooleanValue("cloudPasswordPolicyForPasswordSyncedUsersEnabled", this.cloudPasswordPolicyForPasswordSyncedUsersEnabled);
        writer.writeBooleanValue("concurrentCredentialUpdateEnabled", this.concurrentCredentialUpdateEnabled);
        writer.writeBooleanValue("concurrentOrgIdProvisioningEnabled", this.concurrentOrgIdProvisioningEnabled);
        writer.writeBooleanValue("deviceWritebackEnabled", this.deviceWritebackEnabled);
        writer.writeBooleanValue("directoryExtensionsEnabled", this.directoryExtensionsEnabled);
        writer.writeBooleanValue("fopeConflictResolutionEnabled", this.fopeConflictResolutionEnabled);
        writer.writeBooleanValue("groupWriteBackEnabled", this.groupWriteBackEnabled);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeBooleanValue("passwordSyncEnabled", this.passwordSyncEnabled);
        writer.writeBooleanValue("passwordWritebackEnabled", this.passwordWritebackEnabled);
        writer.writeBooleanValue("quarantineUponProxyAddressesConflictEnabled", this.quarantineUponProxyAddressesConflictEnabled);
        writer.writeBooleanValue("quarantineUponUpnConflictEnabled", this.quarantineUponUpnConflictEnabled);
        writer.writeBooleanValue("softMatchOnUpnEnabled", this.softMatchOnUpnEnabled);
        writer.writeBooleanValue("synchronizeUpnForManagedUsersEnabled", this.synchronizeUpnForManagedUsersEnabled);
        writer.writeBooleanValue("unifiedGroupWritebackEnabled", this.unifiedGroupWritebackEnabled);
        writer.writeBooleanValue("userForcePasswordChangeOnLogonEnabled", this.userForcePasswordChangeOnLogonEnabled);
        writer.writeBooleanValue("userWritebackEnabled", this.userWritebackEnabled);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the softMatchOnUpnEnabled property value. Used to indicate that we should soft match objects based on userPrincipalName.
     * @returns a boolean
     */
    public get softMatchOnUpnEnabled() {
        return this._softMatchOnUpnEnabled;
    };
    /**
     * Sets the softMatchOnUpnEnabled property value. Used to indicate that we should soft match objects based on userPrincipalName.
     * @param value Value to set for the softMatchOnUpnEnabled property.
     */
    public set softMatchOnUpnEnabled(value: boolean | undefined) {
        this._softMatchOnUpnEnabled = value;
    };
    /**
     * Gets the synchronizeUpnForManagedUsersEnabled property value. Used to indicate that we should synchronize userPrincipalName objects for managed users with licenses.
     * @returns a boolean
     */
    public get synchronizeUpnForManagedUsersEnabled() {
        return this._synchronizeUpnForManagedUsersEnabled;
    };
    /**
     * Sets the synchronizeUpnForManagedUsersEnabled property value. Used to indicate that we should synchronize userPrincipalName objects for managed users with licenses.
     * @param value Value to set for the synchronizeUpnForManagedUsersEnabled property.
     */
    public set synchronizeUpnForManagedUsersEnabled(value: boolean | undefined) {
        this._synchronizeUpnForManagedUsersEnabled = value;
    };
    /**
     * Gets the unifiedGroupWritebackEnabled property value. Used to indicate that Microsoft 365 Group write-back is enabled.
     * @returns a boolean
     */
    public get unifiedGroupWritebackEnabled() {
        return this._unifiedGroupWritebackEnabled;
    };
    /**
     * Sets the unifiedGroupWritebackEnabled property value. Used to indicate that Microsoft 365 Group write-back is enabled.
     * @param value Value to set for the unifiedGroupWritebackEnabled property.
     */
    public set unifiedGroupWritebackEnabled(value: boolean | undefined) {
        this._unifiedGroupWritebackEnabled = value;
    };
    /**
     * Gets the userForcePasswordChangeOnLogonEnabled property value. Used to indicate that feature to force password change for a user on logon is enabled while synchronizing on-premise credentials.
     * @returns a boolean
     */
    public get userForcePasswordChangeOnLogonEnabled() {
        return this._userForcePasswordChangeOnLogonEnabled;
    };
    /**
     * Sets the userForcePasswordChangeOnLogonEnabled property value. Used to indicate that feature to force password change for a user on logon is enabled while synchronizing on-premise credentials.
     * @param value Value to set for the userForcePasswordChangeOnLogonEnabled property.
     */
    public set userForcePasswordChangeOnLogonEnabled(value: boolean | undefined) {
        this._userForcePasswordChangeOnLogonEnabled = value;
    };
    /**
     * Gets the userWritebackEnabled property value. Used to indicate that user writeback is enabled.
     * @returns a boolean
     */
    public get userWritebackEnabled() {
        return this._userWritebackEnabled;
    };
    /**
     * Sets the userWritebackEnabled property value. Used to indicate that user writeback is enabled.
     * @param value Value to set for the userWritebackEnabled property.
     */
    public set userWritebackEnabled(value: boolean | undefined) {
        this._userWritebackEnabled = value;
    };
}
