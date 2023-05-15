import {OnPremisesDirectorySynchronizationFeature} from './onPremisesDirectorySynchronizationFeature';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOnPremisesDirectorySynchronizationFeature(writer: SerializationWriter, onPremisesDirectorySynchronizationFeature: OnPremisesDirectorySynchronizationFeature | undefined = {} as OnPremisesDirectorySynchronizationFeature) : void {
        writer.writeBooleanValue("blockCloudObjectTakeoverThroughHardMatchEnabled", onPremisesDirectorySynchronizationFeature.blockCloudObjectTakeoverThroughHardMatchEnabled);
        writer.writeBooleanValue("blockSoftMatchEnabled", onPremisesDirectorySynchronizationFeature.blockSoftMatchEnabled);
        writer.writeBooleanValue("bypassDirSyncOverridesEnabled", onPremisesDirectorySynchronizationFeature.bypassDirSyncOverridesEnabled);
        writer.writeBooleanValue("cloudPasswordPolicyForPasswordSyncedUsersEnabled", onPremisesDirectorySynchronizationFeature.cloudPasswordPolicyForPasswordSyncedUsersEnabled);
        writer.writeBooleanValue("concurrentCredentialUpdateEnabled", onPremisesDirectorySynchronizationFeature.concurrentCredentialUpdateEnabled);
        writer.writeBooleanValue("concurrentOrgIdProvisioningEnabled", onPremisesDirectorySynchronizationFeature.concurrentOrgIdProvisioningEnabled);
        writer.writeBooleanValue("deviceWritebackEnabled", onPremisesDirectorySynchronizationFeature.deviceWritebackEnabled);
        writer.writeBooleanValue("directoryExtensionsEnabled", onPremisesDirectorySynchronizationFeature.directoryExtensionsEnabled);
        writer.writeBooleanValue("fopeConflictResolutionEnabled", onPremisesDirectorySynchronizationFeature.fopeConflictResolutionEnabled);
        writer.writeBooleanValue("groupWriteBackEnabled", onPremisesDirectorySynchronizationFeature.groupWriteBackEnabled);
        writer.writeStringValue("@odata.type", onPremisesDirectorySynchronizationFeature.odataType);
        writer.writeBooleanValue("passwordSyncEnabled", onPremisesDirectorySynchronizationFeature.passwordSyncEnabled);
        writer.writeBooleanValue("passwordWritebackEnabled", onPremisesDirectorySynchronizationFeature.passwordWritebackEnabled);
        writer.writeBooleanValue("quarantineUponProxyAddressesConflictEnabled", onPremisesDirectorySynchronizationFeature.quarantineUponProxyAddressesConflictEnabled);
        writer.writeBooleanValue("quarantineUponUpnConflictEnabled", onPremisesDirectorySynchronizationFeature.quarantineUponUpnConflictEnabled);
        writer.writeBooleanValue("softMatchOnUpnEnabled", onPremisesDirectorySynchronizationFeature.softMatchOnUpnEnabled);
        writer.writeBooleanValue("synchronizeUpnForManagedUsersEnabled", onPremisesDirectorySynchronizationFeature.synchronizeUpnForManagedUsersEnabled);
        writer.writeBooleanValue("unifiedGroupWritebackEnabled", onPremisesDirectorySynchronizationFeature.unifiedGroupWritebackEnabled);
        writer.writeBooleanValue("userForcePasswordChangeOnLogonEnabled", onPremisesDirectorySynchronizationFeature.userForcePasswordChangeOnLogonEnabled);
        writer.writeBooleanValue("userWritebackEnabled", onPremisesDirectorySynchronizationFeature.userWritebackEnabled);
        writer.writeAdditionalData(onPremisesDirectorySynchronizationFeature.additionalData);
}
