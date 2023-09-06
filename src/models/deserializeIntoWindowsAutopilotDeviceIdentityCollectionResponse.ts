import { createWindowsAutopilotDeviceIdentityFromDiscriminatorValue } from './createWindowsAutopilotDeviceIdentityFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeWindowsAutopilotDeviceIdentity } from './serializeWindowsAutopilotDeviceIdentity';
import { type WindowsAutopilotDeviceIdentity } from './windowsAutopilotDeviceIdentity';
import { type WindowsAutopilotDeviceIdentityCollectionResponse } from './windowsAutopilotDeviceIdentityCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsAutopilotDeviceIdentityCollectionResponse(windowsAutopilotDeviceIdentityCollectionResponse: WindowsAutopilotDeviceIdentityCollectionResponse | undefined = {} as WindowsAutopilotDeviceIdentityCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(windowsAutopilotDeviceIdentityCollectionResponse),
        "value": n => { windowsAutopilotDeviceIdentityCollectionResponse.value = n.getCollectionOfObjectValues<WindowsAutopilotDeviceIdentity>(createWindowsAutopilotDeviceIdentityFromDiscriminatorValue); },
    }
}
