import {IosiPadOSWebClip} from './iosiPadOSWebClip';
import {serializeMobileApp} from './serializeMobileApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosiPadOSWebClip(writer: SerializationWriter, iosiPadOSWebClip: IosiPadOSWebClip | undefined = {} as IosiPadOSWebClip) : void {
        serializeMobileApp(writer, iosiPadOSWebClip)
        writer.writeStringValue("appUrl", iosiPadOSWebClip.appUrl);
        writer.writeBooleanValue("useManagedBrowser", iosiPadOSWebClip.useManagedBrowser);
}
