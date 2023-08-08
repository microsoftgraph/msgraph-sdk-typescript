import {deserializeIntoMobileApp} from './deserializeIntoMobileApp';
import type {WindowsWebApp} from './windowsWebApp';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsWebApp(windowsWebApp: WindowsWebApp | undefined = {} as WindowsWebApp) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileApp(windowsWebApp),
        "appUrl": n => { windowsWebApp.appUrl = n.getStringValue(); },
    }
}
