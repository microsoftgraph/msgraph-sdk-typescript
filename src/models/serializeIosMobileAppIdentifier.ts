import { type IosMobileAppIdentifier } from './iosMobileAppIdentifier';
import { serializeMobileAppIdentifier } from './serializeMobileAppIdentifier';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeIosMobileAppIdentifier(writer: SerializationWriter, iosMobileAppIdentifier: IosMobileAppIdentifier | undefined = {} as IosMobileAppIdentifier) : void {
        serializeMobileAppIdentifier(writer, iosMobileAppIdentifier)
        writer.writeStringValue("bundleId", iosMobileAppIdentifier.bundleId);
}
