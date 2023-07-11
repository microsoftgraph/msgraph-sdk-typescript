import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface OnPremisesDirectorySynchronizationFeature extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Used to block cloud object takeover via source anchor hard match if enabled.
     */
    blockCloudObjectTakeoverThroughHardMatchEnabled?: boolean | undefined;
    /**
     * Use to block soft match for all objects if enabled for the  tenant. Customers are encouraged to enable this feature and keep it enabled until soft matching is required again for their tenancy. This flag should be enabled again after any soft matching has been completed and is no longer needed.
     */
    blockSoftMatchEnabled?: boolean | undefined;
    /**
     * When true, persists the values of Mobile and OtherMobile in on-premises AD during sync cycles instead of values of MobilePhone or AlternateMobilePhones in Azure AD.
     */
    bypassDirSyncOverridesEnabled?: boolean | undefined;
    /**
     * Used to indicate that cloud password policy applies to users whose passwords are synchronized from on-premises.
     */
    cloudPasswordPolicyForPasswordSyncedUsersEnabled?: boolean | undefined;
    /**
     * Used to enable concurrent user credentials update in OrgId.
     */
    concurrentCredentialUpdateEnabled?: boolean | undefined;
    /**
     * Used to enable concurrent user creation in OrgId.
     */
    concurrentOrgIdProvisioningEnabled?: boolean | undefined;
    /**
     * Used to indicate that device write-back is enabled.
     */
    deviceWritebackEnabled?: boolean | undefined;
    /**
     * Used to indicate that directory extensions are being synced from on-premises AD to Azure AD.
     */
    directoryExtensionsEnabled?: boolean | undefined;
    /**
     * Used to indicate that for a Microsoft Forefront Online Protection for Exchange (FOPE) migrated tenant, the conflicting proxy address should be migrated over.
     */
    fopeConflictResolutionEnabled?: boolean | undefined;
    /**
     * Used to enable object-level group writeback feature for additional group types.
     */
    groupWriteBackEnabled?: boolean | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Used to indicate on-premise password synchronization is enabled.
     */
    passwordSyncEnabled?: boolean | undefined;
    /**
     * Used to indicate that writeback of password resets from Azure AD to on-premises AD is enabled.
     */
    passwordWritebackEnabled?: boolean | undefined;
    /**
     * Used to indicate that we should quarantine objects with conflicting proxy address.
     */
    quarantineUponProxyAddressesConflictEnabled?: boolean | undefined;
    /**
     * Used to indicate that we should quarantine objects conflicting with duplicate userPrincipalName.
     */
    quarantineUponUpnConflictEnabled?: boolean | undefined;
    /**
     * Used to indicate that we should soft match objects based on userPrincipalName.
     */
    softMatchOnUpnEnabled?: boolean | undefined;
    /**
     * Used to indicate that we should synchronize userPrincipalName objects for managed users with licenses.
     */
    synchronizeUpnForManagedUsersEnabled?: boolean | undefined;
    /**
     * Used to indicate that Microsoft 365 Group write-back is enabled.
     */
    unifiedGroupWritebackEnabled?: boolean | undefined;
    /**
     * Used to indicate that feature to force password change for a user on logon is enabled while synchronizing on-premise credentials.
     */
    userForcePasswordChangeOnLogonEnabled?: boolean | undefined;
    /**
     * Used to indicate that user writeback is enabled.
     */
    userWritebackEnabled?: boolean | undefined;
}
