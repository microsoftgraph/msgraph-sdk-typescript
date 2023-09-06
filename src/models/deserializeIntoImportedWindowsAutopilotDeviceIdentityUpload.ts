import { createImportedWindowsAutopilotDeviceIdentityFromDiscriminatorValue } from './createImportedWindowsAutopilotDeviceIdentityFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type ImportedWindowsAutopilotDeviceIdentity } from './importedWindowsAutopilotDeviceIdentity';
import { type ImportedWindowsAutopilotDeviceIdentityUpload } from './importedWindowsAutopilotDeviceIdentityUpload';
import { ImportedWindowsAutopilotDeviceIdentityUploadStatus } from './importedWindowsAutopilotDeviceIdentityUploadStatus';
import { serializeImportedWindowsAutopilotDeviceIdentity } from './serializeImportedWindowsAutopilotDeviceIdentity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoImportedWindowsAutopilotDeviceIdentityUpload(importedWindowsAutopilotDeviceIdentityUpload: ImportedWindowsAutopilotDeviceIdentityUpload | undefined = {} as ImportedWindowsAutopilotDeviceIdentityUpload) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(importedWindowsAutopilotDeviceIdentityUpload),
        "createdDateTimeUtc": n => { importedWindowsAutopilotDeviceIdentityUpload.createdDateTimeUtc = n.getDateValue(); },
        "deviceIdentities": n => { importedWindowsAutopilotDeviceIdentityUpload.deviceIdentities = n.getCollectionOfObjectValues<ImportedWindowsAutopilotDeviceIdentity>(createImportedWindowsAutopilotDeviceIdentityFromDiscriminatorValue); },
        "status": n => { importedWindowsAutopilotDeviceIdentityUpload.status = n.getEnumValue<ImportedWindowsAutopilotDeviceIdentityUploadStatus>(ImportedWindowsAutopilotDeviceIdentityUploadStatus); },
    }
}
