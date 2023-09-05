import { type Entity } from './entity';
import { type ImportedWindowsAutopilotDeviceIdentity } from './importedWindowsAutopilotDeviceIdentity';
import { ImportedWindowsAutopilotDeviceIdentityUploadStatus } from './importedWindowsAutopilotDeviceIdentityUploadStatus';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface ImportedWindowsAutopilotDeviceIdentityUpload extends Entity, Parsable {
    /**
     * DateTime when the entity is created.
     */
    createdDateTimeUtc?: Date | undefined;
    /**
     * Collection of all Autopilot devices as a part of this upload.
     */
    deviceIdentities?: ImportedWindowsAutopilotDeviceIdentity[] | undefined;
    /**
     * The status property
     */
    status?: ImportedWindowsAutopilotDeviceIdentityUploadStatus | undefined;
}
