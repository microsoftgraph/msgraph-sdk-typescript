import {deserializeIntoMobileContainedApp} from './deserializeIntoMobileContainedApp';
import {WindowsUniversalAppXContainedApp} from './windowsUniversalAppXContainedApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsUniversalAppXContainedApp(windowsUniversalAppXContainedApp: WindowsUniversalAppXContainedApp | undefined = {} as WindowsUniversalAppXContainedApp) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileContainedApp(windowsUniversalAppXContainedApp),
        "appUserModelId": n => { windowsUniversalAppXContainedApp.appUserModelId = n.getStringValue(); },
    }
}
