import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWindowsAutopilotDeviceIdentity} from './serializeWindowsAutopilotDeviceIdentity';
import {WindowsAutopilotDeviceIdentity} from './windowsAutopilotDeviceIdentity';
import {WindowsAutopilotDeviceIdentityCollectionResponse} from './windowsAutopilotDeviceIdentityCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsAutopilotDeviceIdentityCollectionResponse(writer: SerializationWriter, windowsAutopilotDeviceIdentityCollectionResponse: WindowsAutopilotDeviceIdentityCollectionResponse | undefined = {} as WindowsAutopilotDeviceIdentityCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, windowsAutopilotDeviceIdentityCollectionResponse)
        writer.writeCollectionOfObjectValues<WindowsAutopilotDeviceIdentity>("value", windowsAutopilotDeviceIdentityCollectionResponse.value, serializeWindowsAutopilotDeviceIdentity);
}
