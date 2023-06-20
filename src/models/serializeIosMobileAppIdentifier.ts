import {IosMobileAppIdentifier} from './iosMobileAppIdentifier';
import {serializeMobileAppIdentifier} from './serializeMobileAppIdentifier';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosMobileAppIdentifier(iosMobileAppIdentifier: IosMobileAppIdentifier | undefined = {} as IosMobileAppIdentifier, writer: SerializationWriter) : void {
        serializeMobileAppIdentifier(writer, iosMobileAppIdentifier)
        writer.writeStringValue("bundleId", iosMobileAppIdentifier.bundleId);
}
