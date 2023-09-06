import { type AndroidMobileAppIdentifier } from './androidMobileAppIdentifier';
import { serializeMobileAppIdentifier } from './serializeMobileAppIdentifier';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAndroidMobileAppIdentifier(writer: SerializationWriter, androidMobileAppIdentifier: AndroidMobileAppIdentifier | undefined = {} as AndroidMobileAppIdentifier) : void {
        serializeMobileAppIdentifier(writer, androidMobileAppIdentifier)
        writer.writeStringValue("packageId", androidMobileAppIdentifier.packageId);
}
