import {ImportedWindowsAutopilotDeviceIdentityImportStatus} from './importedWindowsAutopilotDeviceIdentityImportStatus';
import {ImportedWindowsAutopilotDeviceIdentityState} from './importedWindowsAutopilotDeviceIdentityState';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImportedWindowsAutopilotDeviceIdentityState(writer: SerializationWriter, importedWindowsAutopilotDeviceIdentityState: ImportedWindowsAutopilotDeviceIdentityState | undefined = {} as ImportedWindowsAutopilotDeviceIdentityState) : void {
        writer.writeNumberValue("deviceErrorCode", importedWindowsAutopilotDeviceIdentityState.deviceErrorCode);
        writer.writeStringValue("deviceErrorName", importedWindowsAutopilotDeviceIdentityState.deviceErrorName);
        writer.writeEnumValue<ImportedWindowsAutopilotDeviceIdentityImportStatus>("deviceImportStatus", importedWindowsAutopilotDeviceIdentityState.deviceImportStatus);
        writer.writeStringValue("deviceRegistrationId", importedWindowsAutopilotDeviceIdentityState.deviceRegistrationId);
        writer.writeStringValue("@odata.type", importedWindowsAutopilotDeviceIdentityState.odataType);
        writer.writeAdditionalData(importedWindowsAutopilotDeviceIdentityState.additionalData);
}
