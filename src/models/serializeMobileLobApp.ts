import { type MobileAppContent } from './mobileAppContent';
import { type MobileLobApp } from './mobileLobApp';
import { serializeMobileApp } from './serializeMobileApp';
import { serializeMobileAppContent } from './serializeMobileAppContent';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeMobileLobApp(writer: SerializationWriter, mobileLobApp: MobileLobApp | undefined = {} as MobileLobApp) : void {
        serializeMobileApp(writer, mobileLobApp)
        writer.writeStringValue("committedContentVersion", mobileLobApp.committedContentVersion);
        writer.writeCollectionOfObjectValues<MobileAppContent>("contentVersions", mobileLobApp.contentVersions, serializeMobileAppContent);
        writer.writeStringValue("fileName", mobileLobApp.fileName);
        writer.writeNumberValue("size", mobileLobApp.size);
}
