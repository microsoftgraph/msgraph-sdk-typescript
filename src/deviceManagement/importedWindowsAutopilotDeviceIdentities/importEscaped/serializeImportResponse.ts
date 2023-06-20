import {ImportedWindowsAutopilotDeviceIdentity} from '../../../models/importedWindowsAutopilotDeviceIdentity';
import {serializeBaseCollectionPaginationCountResponse} from '../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeImportedWindowsAutopilotDeviceIdentity} from '../../../models/serializeImportedWindowsAutopilotDeviceIdentity';
import {ImportResponse} from './importResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImportResponse(importResponse: ImportResponse | undefined = {} as ImportResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, importResponse)
        writer.writeCollectionOfObjectValues<ImportedWindowsAutopilotDeviceIdentity>("value", importResponse.value, serializeImportedWindowsAutopilotDeviceIdentity);
}
