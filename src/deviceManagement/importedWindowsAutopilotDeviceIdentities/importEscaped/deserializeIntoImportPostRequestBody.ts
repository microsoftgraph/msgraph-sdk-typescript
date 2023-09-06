import { createImportedWindowsAutopilotDeviceIdentityFromDiscriminatorValue } from '../../../models/createImportedWindowsAutopilotDeviceIdentityFromDiscriminatorValue';
import { type ImportedWindowsAutopilotDeviceIdentity } from '../../../models/importedWindowsAutopilotDeviceIdentity';
import { serializeImportedWindowsAutopilotDeviceIdentity } from '../../../models/serializeImportedWindowsAutopilotDeviceIdentity';
import { type ImportPostRequestBody } from './importPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoImportPostRequestBody(importPostRequestBody: ImportPostRequestBody | undefined = {} as ImportPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "importedWindowsAutopilotDeviceIdentities": n => { importPostRequestBody.importedWindowsAutopilotDeviceIdentities = n.getCollectionOfObjectValues<ImportedWindowsAutopilotDeviceIdentity>(createImportedWindowsAutopilotDeviceIdentityFromDiscriminatorValue); },
    }
}
