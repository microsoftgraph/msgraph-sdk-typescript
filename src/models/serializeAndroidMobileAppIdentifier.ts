import {AndroidMobileAppIdentifier} from './androidMobileAppIdentifier';
import {serializeMobileAppIdentifier} from './serializeMobileAppIdentifier';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAndroidMobileAppIdentifier(androidMobileAppIdentifier: AndroidMobileAppIdentifier | undefined = {} as AndroidMobileAppIdentifier, writer: SerializationWriter) : void {
        serializeMobileAppIdentifier(writer, androidMobileAppIdentifier)
        writer.writeStringValue("packageId", androidMobileAppIdentifier.packageId);
}
