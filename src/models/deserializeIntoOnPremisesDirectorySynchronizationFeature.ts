import {OnPremisesDirectorySynchronizationFeature} from './onPremisesDirectorySynchronizationFeature';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOnPremisesDirectorySynchronizationFeature(onPremisesDirectorySynchronizationFeature: OnPremisesDirectorySynchronizationFeature | undefined = {} as OnPremisesDirectorySynchronizationFeature) : Record<string, (node: ParseNode) => void> {
    return {
        "blockCloudObjectTakeoverThroughHardMatchEnabled": n => { onPremisesDirectorySynchronizationFeature.blockCloudObjectTakeoverThroughHardMatchEnabled = n.getBooleanValue(); },
        "blockSoftMatchEnabled": n => { onPremisesDirectorySynchronizationFeature.blockSoftMatchEnabled = n.getBooleanValue(); },
        "bypassDirSyncOverridesEnabled": n => { onPremisesDirectorySynchronizationFeature.bypassDirSyncOverridesEnabled = n.getBooleanValue(); },
        "cloudPasswordPolicyForPasswordSyncedUsersEnabled": n => { onPremisesDirectorySynchronizationFeature.cloudPasswordPolicyForPasswordSyncedUsersEnabled = n.getBooleanValue(); },
        "concurrentCredentialUpdateEnabled": n => { onPremisesDirectorySynchronizationFeature.concurrentCredentialUpdateEnabled = n.getBooleanValue(); },
        "concurrentOrgIdProvisioningEnabled": n => { onPremisesDirectorySynchronizationFeature.concurrentOrgIdProvisioningEnabled = n.getBooleanValue(); },
        "deviceWritebackEnabled": n => { onPremisesDirectorySynchronizationFeature.deviceWritebackEnabled = n.getBooleanValue(); },
        "directoryExtensionsEnabled": n => { onPremisesDirectorySynchronizationFeature.directoryExtensionsEnabled = n.getBooleanValue(); },
        "fopeConflictResolutionEnabled": n => { onPremisesDirectorySynchronizationFeature.fopeConflictResolutionEnabled = n.getBooleanValue(); },
        "groupWriteBackEnabled": n => { onPremisesDirectorySynchronizationFeature.groupWriteBackEnabled = n.getBooleanValue(); },
        "@odata.type": n => { onPremisesDirectorySynchronizationFeature.odataType = n.getStringValue(); },
        "passwordSyncEnabled": n => { onPremisesDirectorySynchronizationFeature.passwordSyncEnabled = n.getBooleanValue(); },
        "passwordWritebackEnabled": n => { onPremisesDirectorySynchronizationFeature.passwordWritebackEnabled = n.getBooleanValue(); },
        "quarantineUponProxyAddressesConflictEnabled": n => { onPremisesDirectorySynchronizationFeature.quarantineUponProxyAddressesConflictEnabled = n.getBooleanValue(); },
        "quarantineUponUpnConflictEnabled": n => { onPremisesDirectorySynchronizationFeature.quarantineUponUpnConflictEnabled = n.getBooleanValue(); },
        "softMatchOnUpnEnabled": n => { onPremisesDirectorySynchronizationFeature.softMatchOnUpnEnabled = n.getBooleanValue(); },
        "synchronizeUpnForManagedUsersEnabled": n => { onPremisesDirectorySynchronizationFeature.synchronizeUpnForManagedUsersEnabled = n.getBooleanValue(); },
        "unifiedGroupWritebackEnabled": n => { onPremisesDirectorySynchronizationFeature.unifiedGroupWritebackEnabled = n.getBooleanValue(); },
        "userForcePasswordChangeOnLogonEnabled": n => { onPremisesDirectorySynchronizationFeature.userForcePasswordChangeOnLogonEnabled = n.getBooleanValue(); },
        "userWritebackEnabled": n => { onPremisesDirectorySynchronizationFeature.userWritebackEnabled = n.getBooleanValue(); },
    }
}
