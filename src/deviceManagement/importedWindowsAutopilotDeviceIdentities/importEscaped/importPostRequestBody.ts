import { type ImportedWindowsAutopilotDeviceIdentity } from '../../../models/importedWindowsAutopilotDeviceIdentity';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface ImportPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The importedWindowsAutopilotDeviceIdentities property
     */
    importedWindowsAutopilotDeviceIdentities?: ImportedWindowsAutopilotDeviceIdentity[] | undefined;
}
