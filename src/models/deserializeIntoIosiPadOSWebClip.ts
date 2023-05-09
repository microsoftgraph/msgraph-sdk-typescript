import {deserializeIntoMobileApp} from './deserializeIntoMobileApp';
import {IosiPadOSWebClip} from './iosiPadOSWebClip';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosiPadOSWebClip(iosiPadOSWebClip: IosiPadOSWebClip | undefined = {} as IosiPadOSWebClip) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileApp(iosiPadOSWebClip),
        "appUrl": n => { iosiPadOSWebClip.appUrl = n.getStringValue(); },
        "useManagedBrowser": n => { iosiPadOSWebClip.useManagedBrowser = n.getBooleanValue(); },
    }
}
