import type {ImportedWindowsAutopilotDeviceIdentity} from '../../../models/importedWindowsAutopilotDeviceIdentity';
import {serializeBaseCollectionPaginationCountResponse} from '../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeImportedWindowsAutopilotDeviceIdentity} from '../../../models/serializeImportedWindowsAutopilotDeviceIdentity';
import type {ImportResponse} from './importResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImportResponse(writer: SerializationWriter, importResponse: ImportResponse | undefined = {} as ImportResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, importResponse)
        writer.writeCollectionOfObjectValues<ImportedWindowsAutopilotDeviceIdentity>("value", importResponse.value, serializeImportedWindowsAutopilotDeviceIdentity);
}
