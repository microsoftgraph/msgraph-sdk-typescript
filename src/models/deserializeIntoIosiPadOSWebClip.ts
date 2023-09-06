import { deserializeIntoMobileApp } from './deserializeIntoMobileApp';
import { type IosiPadOSWebClip } from './iosiPadOSWebClip';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoIosiPadOSWebClip(iosiPadOSWebClip: IosiPadOSWebClip | undefined = {} as IosiPadOSWebClip) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileApp(iosiPadOSWebClip),
        "appUrl": n => { iosiPadOSWebClip.appUrl = n.getStringValue(); },
        "useManagedBrowser": n => { iosiPadOSWebClip.useManagedBrowser = n.getBooleanValue(); },
    }
}
