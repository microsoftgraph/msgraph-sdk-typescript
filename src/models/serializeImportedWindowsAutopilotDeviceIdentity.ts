import {ImportedWindowsAutopilotDeviceIdentity} from './importedWindowsAutopilotDeviceIdentity';
import {ImportedWindowsAutopilotDeviceIdentityState} from './importedWindowsAutopilotDeviceIdentityState';
import {serializeEntity} from './serializeEntity';
import {serializeImportedWindowsAutopilotDeviceIdentityState} from './serializeImportedWindowsAutopilotDeviceIdentityState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImportedWindowsAutopilotDeviceIdentity(writer: SerializationWriter, importedWindowsAutopilotDeviceIdentity: ImportedWindowsAutopilotDeviceIdentity | undefined = {} as ImportedWindowsAutopilotDeviceIdentity) : void {
        serializeEntity(writer, importedWindowsAutopilotDeviceIdentity)
        writer.writeStringValue("assignedUserPrincipalName", importedWindowsAutopilotDeviceIdentity.assignedUserPrincipalName);
        writer.writeStringValue("groupTag", importedWindowsAutopilotDeviceIdentity.groupTag);
        writer.writeStringValue("hardwareIdentifier", importedWindowsAutopilotDeviceIdentity.hardwareIdentifier);
        writer.writeStringValue("importId", importedWindowsAutopilotDeviceIdentity.importId);
        writer.writeStringValue("productKey", importedWindowsAutopilotDeviceIdentity.productKey);
        writer.writeStringValue("serialNumber", importedWindowsAutopilotDeviceIdentity.serialNumber);
        writer.writeObjectValue<ImportedWindowsAutopilotDeviceIdentityState>("state", importedWindowsAutopilotDeviceIdentity.state, serializeImportedWindowsAutopilotDeviceIdentityState);
}
