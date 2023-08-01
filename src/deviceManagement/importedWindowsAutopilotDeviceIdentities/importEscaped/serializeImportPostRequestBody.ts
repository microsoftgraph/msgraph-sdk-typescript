import type {ImportedWindowsAutopilotDeviceIdentity} from '../../../models/importedWindowsAutopilotDeviceIdentity';
import {serializeImportedWindowsAutopilotDeviceIdentity} from '../../../models/serializeImportedWindowsAutopilotDeviceIdentity';
import type {ImportPostRequestBody} from './importPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImportPostRequestBody(writer: SerializationWriter, importPostRequestBody: ImportPostRequestBody | undefined = {} as ImportPostRequestBody) : void {
        writer.writeCollectionOfObjectValues<ImportedWindowsAutopilotDeviceIdentity>("importedWindowsAutopilotDeviceIdentities", importPostRequestBody.importedWindowsAutopilotDeviceIdentities, serializeImportedWindowsAutopilotDeviceIdentity);
        writer.writeAdditionalData(importPostRequestBody.additionalData);
}
