import { deserializeIntoMobileApp } from './deserializeIntoMobileApp';
import { type WebApp } from './webApp';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWebApp(webApp: WebApp | undefined = {} as WebApp) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileApp(webApp),
        "appUrl": n => { webApp.appUrl = n.getStringValue(); },
        "useManagedBrowser": n => { webApp.useManagedBrowser = n.getBooleanValue(); },
    }
}
