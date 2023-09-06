import { type MobileAppContent } from './mobileAppContent';
import { type MobileAppContentFile } from './mobileAppContentFile';
import { type MobileContainedApp } from './mobileContainedApp';
import { serializeEntity } from './serializeEntity';
import { serializeMobileAppContentFile } from './serializeMobileAppContentFile';
import { serializeMobileContainedApp } from './serializeMobileContainedApp';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeMobileAppContent(writer: SerializationWriter, mobileAppContent: MobileAppContent | undefined = {} as MobileAppContent) : void {
        serializeEntity(writer, mobileAppContent)
        writer.writeCollectionOfObjectValues<MobileContainedApp>("containedApps", mobileAppContent.containedApps, serializeMobileContainedApp);
        writer.writeCollectionOfObjectValues<MobileAppContentFile>("files", mobileAppContent.files, serializeMobileAppContentFile);
}
