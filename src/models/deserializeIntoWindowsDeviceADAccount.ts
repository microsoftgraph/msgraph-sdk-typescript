import {deserializeIntoWindowsDeviceAccount} from './deserializeIntoWindowsDeviceAccount';
import {WindowsDeviceADAccount} from './windowsDeviceADAccount';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsDeviceADAccount(windowsDeviceADAccount: WindowsDeviceADAccount | undefined = {} as WindowsDeviceADAccount) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoWindowsDeviceAccount(windowsDeviceADAccount),
        "domainName": n => { windowsDeviceADAccount.domainName = n.getStringValue(); },
        "userName": n => { windowsDeviceADAccount.userName = n.getStringValue(); },
    }
}
