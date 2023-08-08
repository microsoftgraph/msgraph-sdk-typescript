import type {ImportedWindowsAutopilotDeviceIdentity} from './importedWindowsAutopilotDeviceIdentity';
import type {ImportedWindowsAutopilotDeviceIdentityCollectionResponse} from './importedWindowsAutopilotDeviceIdentityCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeImportedWindowsAutopilotDeviceIdentity} from './serializeImportedWindowsAutopilotDeviceIdentity';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImportedWindowsAutopilotDeviceIdentityCollectionResponse(writer: SerializationWriter, importedWindowsAutopilotDeviceIdentityCollectionResponse: ImportedWindowsAutopilotDeviceIdentityCollectionResponse | undefined = {} as ImportedWindowsAutopilotDeviceIdentityCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, importedWindowsAutopilotDeviceIdentityCollectionResponse)
        writer.writeCollectionOfObjectValues<ImportedWindowsAutopilotDeviceIdentity>("value", importedWindowsAutopilotDeviceIdentityCollectionResponse.value, serializeImportedWindowsAutopilotDeviceIdentity);
}
