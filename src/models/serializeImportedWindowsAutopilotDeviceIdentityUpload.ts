import { type ImportedWindowsAutopilotDeviceIdentity } from './importedWindowsAutopilotDeviceIdentity';
import { type ImportedWindowsAutopilotDeviceIdentityUpload } from './importedWindowsAutopilotDeviceIdentityUpload';
import { ImportedWindowsAutopilotDeviceIdentityUploadStatus } from './importedWindowsAutopilotDeviceIdentityUploadStatus';
import { serializeEntity } from './serializeEntity';
import { serializeImportedWindowsAutopilotDeviceIdentity } from './serializeImportedWindowsAutopilotDeviceIdentity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeImportedWindowsAutopilotDeviceIdentityUpload(writer: SerializationWriter, importedWindowsAutopilotDeviceIdentityUpload: ImportedWindowsAutopilotDeviceIdentityUpload | undefined = {} as ImportedWindowsAutopilotDeviceIdentityUpload) : void {
        serializeEntity(writer, importedWindowsAutopilotDeviceIdentityUpload)
        writer.writeDateValue("createdDateTimeUtc", importedWindowsAutopilotDeviceIdentityUpload.createdDateTimeUtc);
        writer.writeCollectionOfObjectValues<ImportedWindowsAutopilotDeviceIdentity>("deviceIdentities", importedWindowsAutopilotDeviceIdentityUpload.deviceIdentities, serializeImportedWindowsAutopilotDeviceIdentity);
        writer.writeEnumValue<ImportedWindowsAutopilotDeviceIdentityUploadStatus>("status", importedWindowsAutopilotDeviceIdentityUpload.status);
}
