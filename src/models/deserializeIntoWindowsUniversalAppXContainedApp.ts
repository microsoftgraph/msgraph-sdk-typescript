import { deserializeIntoMobileContainedApp } from './deserializeIntoMobileContainedApp';
import { type WindowsUniversalAppXContainedApp } from './windowsUniversalAppXContainedApp';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsUniversalAppXContainedApp(windowsUniversalAppXContainedApp: WindowsUniversalAppXContainedApp | undefined = {} as WindowsUniversalAppXContainedApp) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileContainedApp(windowsUniversalAppXContainedApp),
        "appUserModelId": n => { windowsUniversalAppXContainedApp.appUserModelId = n.getStringValue(); },
    }
}
