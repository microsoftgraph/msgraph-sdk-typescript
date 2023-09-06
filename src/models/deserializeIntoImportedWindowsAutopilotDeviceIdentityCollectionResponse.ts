import { createImportedWindowsAutopilotDeviceIdentityFromDiscriminatorValue } from './createImportedWindowsAutopilotDeviceIdentityFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type ImportedWindowsAutopilotDeviceIdentity } from './importedWindowsAutopilotDeviceIdentity';
import { type ImportedWindowsAutopilotDeviceIdentityCollectionResponse } from './importedWindowsAutopilotDeviceIdentityCollectionResponse';
import { serializeImportedWindowsAutopilotDeviceIdentity } from './serializeImportedWindowsAutopilotDeviceIdentity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoImportedWindowsAutopilotDeviceIdentityCollectionResponse(importedWindowsAutopilotDeviceIdentityCollectionResponse: ImportedWindowsAutopilotDeviceIdentityCollectionResponse | undefined = {} as ImportedWindowsAutopilotDeviceIdentityCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(importedWindowsAutopilotDeviceIdentityCollectionResponse),
        "value": n => { importedWindowsAutopilotDeviceIdentityCollectionResponse.value = n.getCollectionOfObjectValues<ImportedWindowsAutopilotDeviceIdentity>(createImportedWindowsAutopilotDeviceIdentityFromDiscriminatorValue); },
    }
}
