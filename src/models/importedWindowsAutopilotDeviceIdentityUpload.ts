import {Entity} from './entity';
import {ImportedWindowsAutopilotDeviceIdentity} from './importedWindowsAutopilotDeviceIdentity';
import {ImportedWindowsAutopilotDeviceIdentityUploadStatus} from './importedWindowsAutopilotDeviceIdentityUploadStatus';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ImportedWindowsAutopilotDeviceIdentityUpload extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** DateTime when the entity is created. */
    createdDateTimeUtc?: Date | undefined;
    /** Collection of all Autopilot devices as a part of this upload. */
    deviceIdentities?: ImportedWindowsAutopilotDeviceIdentity[] | undefined;
    /** Upload status. */
    status?: ImportedWindowsAutopilotDeviceIdentityUploadStatus | undefined;
}
