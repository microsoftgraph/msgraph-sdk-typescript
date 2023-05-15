import {ImportedWindowsAutopilotDeviceIdentityImportStatus} from './importedWindowsAutopilotDeviceIdentityImportStatus';
import {ImportedWindowsAutopilotDeviceIdentityState} from './importedWindowsAutopilotDeviceIdentityState';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoImportedWindowsAutopilotDeviceIdentityState(importedWindowsAutopilotDeviceIdentityState: ImportedWindowsAutopilotDeviceIdentityState | undefined = {} as ImportedWindowsAutopilotDeviceIdentityState) : Record<string, (node: ParseNode) => void> {
    return {
        "deviceErrorCode": n => { importedWindowsAutopilotDeviceIdentityState.deviceErrorCode = n.getNumberValue(); },
        "deviceErrorName": n => { importedWindowsAutopilotDeviceIdentityState.deviceErrorName = n.getStringValue(); },
        "deviceImportStatus": n => { importedWindowsAutopilotDeviceIdentityState.deviceImportStatus = n.getEnumValue<ImportedWindowsAutopilotDeviceIdentityImportStatus>(ImportedWindowsAutopilotDeviceIdentityImportStatus); },
        "deviceRegistrationId": n => { importedWindowsAutopilotDeviceIdentityState.deviceRegistrationId = n.getStringValue(); },
        "@odata.type": n => { importedWindowsAutopilotDeviceIdentityState.odataType = n.getStringValue(); },
    }
}
