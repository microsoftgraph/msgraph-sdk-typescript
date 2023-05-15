import {createImportedWindowsAutopilotDeviceIdentityFromDiscriminatorValue} from './createImportedWindowsAutopilotDeviceIdentityFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {ImportedWindowsAutopilotDeviceIdentity} from './importedWindowsAutopilotDeviceIdentity';
import {ImportedWindowsAutopilotDeviceIdentityUpload} from './importedWindowsAutopilotDeviceIdentityUpload';
import {ImportedWindowsAutopilotDeviceIdentityUploadStatus} from './importedWindowsAutopilotDeviceIdentityUploadStatus';
import {serializeImportedWindowsAutopilotDeviceIdentity} from './serializeImportedWindowsAutopilotDeviceIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoImportedWindowsAutopilotDeviceIdentityUpload(importedWindowsAutopilotDeviceIdentityUpload: ImportedWindowsAutopilotDeviceIdentityUpload | undefined = {} as ImportedWindowsAutopilotDeviceIdentityUpload) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(importedWindowsAutopilotDeviceIdentityUpload),
        "createdDateTimeUtc": n => { importedWindowsAutopilotDeviceIdentityUpload.createdDateTimeUtc = n.getDateValue(); },
        "deviceIdentities": n => { importedWindowsAutopilotDeviceIdentityUpload.deviceIdentities = n.getCollectionOfObjectValues<ImportedWindowsAutopilotDeviceIdentity>(createImportedWindowsAutopilotDeviceIdentityFromDiscriminatorValue); },
        "status": n => { importedWindowsAutopilotDeviceIdentityUpload.status = n.getEnumValue<ImportedWindowsAutopilotDeviceIdentityUploadStatus>(ImportedWindowsAutopilotDeviceIdentityUploadStatus); },
    }
}
