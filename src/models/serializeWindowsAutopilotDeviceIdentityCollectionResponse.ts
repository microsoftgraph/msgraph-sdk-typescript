import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeWindowsAutopilotDeviceIdentity } from './serializeWindowsAutopilotDeviceIdentity';
import { type WindowsAutopilotDeviceIdentity } from './windowsAutopilotDeviceIdentity';
import { type WindowsAutopilotDeviceIdentityCollectionResponse } from './windowsAutopilotDeviceIdentityCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWindowsAutopilotDeviceIdentityCollectionResponse(writer: SerializationWriter, windowsAutopilotDeviceIdentityCollectionResponse: WindowsAutopilotDeviceIdentityCollectionResponse | undefined = {} as WindowsAutopilotDeviceIdentityCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, windowsAutopilotDeviceIdentityCollectionResponse)
        writer.writeCollectionOfObjectValues<WindowsAutopilotDeviceIdentity>("value", windowsAutopilotDeviceIdentityCollectionResponse.value, serializeWindowsAutopilotDeviceIdentity);
}
