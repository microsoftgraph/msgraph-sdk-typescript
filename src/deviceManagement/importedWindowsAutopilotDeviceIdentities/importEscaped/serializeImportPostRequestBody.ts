import {ImportedWindowsAutopilotDeviceIdentity} from '../../../models/importedWindowsAutopilotDeviceIdentity';
import {serializeImportedWindowsAutopilotDeviceIdentity} from '../../../models/serializeImportedWindowsAutopilotDeviceIdentity';
import {ImportPostRequestBody} from './importPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImportPostRequestBody(importPostRequestBody: ImportPostRequestBody | undefined = {} as ImportPostRequestBody, writer: SerializationWriter) : void {
        writer.writeCollectionOfObjectValues<ImportedWindowsAutopilotDeviceIdentity>("importedWindowsAutopilotDeviceIdentities", importPostRequestBody.importedWindowsAutopilotDeviceIdentities, serializeImportedWindowsAutopilotDeviceIdentity);
        writer.writeAdditionalData(importPostRequestBody.additionalData);
}
