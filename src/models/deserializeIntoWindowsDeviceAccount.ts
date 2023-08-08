import type {WindowsDeviceAccount} from './windowsDeviceAccount';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsDeviceAccount(windowsDeviceAccount: WindowsDeviceAccount | undefined = {} as WindowsDeviceAccount) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { windowsDeviceAccount.odataType = n.getStringValue(); },
        "password": n => { windowsDeviceAccount.password = n.getStringValue(); },
    }
}
