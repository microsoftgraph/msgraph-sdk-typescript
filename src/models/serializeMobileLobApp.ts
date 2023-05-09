import {MobileAppContent} from './mobileAppContent';
import {MobileLobApp} from './mobileLobApp';
import {serializeMobileApp} from './serializeMobileApp';
import {serializeMobileAppContent} from './serializeMobileAppContent';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMobileLobApp(writer: SerializationWriter, mobileLobApp: MobileLobApp | undefined = {} as MobileLobApp) : void {
        serializeMobileApp(writer, mobileLobApp)
        writer.writeStringValue("committedContentVersion", mobileLobApp.committedContentVersion);
        writer.writeCollectionOfObjectValues<MobileAppContent>("contentVersions", mobileLobApp.contentVersions, serializeMobileAppContent);
        writer.writeStringValue("fileName", mobileLobApp.fileName);
        writer.writeNumberValue("size", mobileLobApp.size);
}
