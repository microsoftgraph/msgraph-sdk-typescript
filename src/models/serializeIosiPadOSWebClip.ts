import {IosiPadOSWebClip} from './iosiPadOSWebClip';
import {serializeMobileApp} from './serializeMobileApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosiPadOSWebClip(iosiPadOSWebClip: IosiPadOSWebClip | undefined = {} as IosiPadOSWebClip, writer: SerializationWriter) : void {
        serializeMobileApp(writer, iosiPadOSWebClip)
        writer.writeStringValue("appUrl", iosiPadOSWebClip.appUrl);
        writer.writeBooleanValue("useManagedBrowser", iosiPadOSWebClip.useManagedBrowser);
}
