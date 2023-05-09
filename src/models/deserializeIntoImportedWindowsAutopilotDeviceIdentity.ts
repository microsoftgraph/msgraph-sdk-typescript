import {createImportedWindowsAutopilotDeviceIdentityStateFromDiscriminatorValue} from './createImportedWindowsAutopilotDeviceIdentityStateFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {ImportedWindowsAutopilotDeviceIdentity} from './importedWindowsAutopilotDeviceIdentity';
import {ImportedWindowsAutopilotDeviceIdentityState} from './importedWindowsAutopilotDeviceIdentityState';
import {serializeImportedWindowsAutopilotDeviceIdentityState} from './serializeImportedWindowsAutopilotDeviceIdentityState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoImportedWindowsAutopilotDeviceIdentity(importedWindowsAutopilotDeviceIdentity: ImportedWindowsAutopilotDeviceIdentity | undefined = {} as ImportedWindowsAutopilotDeviceIdentity) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(importedWindowsAutopilotDeviceIdentity),
        "assignedUserPrincipalName": n => { importedWindowsAutopilotDeviceIdentity.assignedUserPrincipalName = n.getStringValue(); },
        "groupTag": n => { importedWindowsAutopilotDeviceIdentity.groupTag = n.getStringValue(); },
        "hardwareIdentifier": n => { importedWindowsAutopilotDeviceIdentity.hardwareIdentifier = n.getStringValue(); },
        "importId": n => { importedWindowsAutopilotDeviceIdentity.importId = n.getStringValue(); },
        "productKey": n => { importedWindowsAutopilotDeviceIdentity.productKey = n.getStringValue(); },
        "serialNumber": n => { importedWindowsAutopilotDeviceIdentity.serialNumber = n.getStringValue(); },
        "state": n => { importedWindowsAutopilotDeviceIdentity.state = n.getObjectValue<ImportedWindowsAutopilotDeviceIdentityState>(createImportedWindowsAutopilotDeviceIdentityStateFromDiscriminatorValue); },
    }
}
