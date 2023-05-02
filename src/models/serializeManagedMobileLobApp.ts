import {ManagedMobileLobApp} from './managedMobileLobApp';
import {MobileAppContent} from './mobileAppContent';
import {serializeManagedApp} from './serializeManagedApp';
import {serializeMobileAppContent} from './serializeMobileAppContent';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedMobileLobApp(writer: SerializationWriter, managedMobileLobApp: ManagedMobileLobApp | undefined = {} as ManagedMobileLobApp) : void {
        serializeManagedApp(writer, managedMobileLobApp)
        writer.writeStringValue("committedContentVersion", managedMobileLobApp.committedContentVersion);
        writer.writeCollectionOfObjectValues<MobileAppContent>("contentVersions", managedMobileLobApp.contentVersions, serializeMobileAppContent);
        writer.writeStringValue("fileName", managedMobileLobApp.fileName);
        writer.writeNumberValue("size", managedMobileLobApp.size);
}
