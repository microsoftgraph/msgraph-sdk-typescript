import { createMobileAppContentFileFromDiscriminatorValue } from './createMobileAppContentFileFromDiscriminatorValue';
import { createMobileContainedAppFromDiscriminatorValue } from './createMobileContainedAppFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type MobileAppContent } from './mobileAppContent';
import { type MobileAppContentFile } from './mobileAppContentFile';
import { type MobileContainedApp } from './mobileContainedApp';
import { serializeMobileAppContentFile } from './serializeMobileAppContentFile';
import { serializeMobileContainedApp } from './serializeMobileContainedApp';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoMobileAppContent(mobileAppContent: MobileAppContent | undefined = {} as MobileAppContent) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(mobileAppContent),
        "containedApps": n => { mobileAppContent.containedApps = n.getCollectionOfObjectValues<MobileContainedApp>(createMobileContainedAppFromDiscriminatorValue); },
        "files": n => { mobileAppContent.files = n.getCollectionOfObjectValues<MobileAppContentFile>(createMobileAppContentFileFromDiscriminatorValue); },
    }
}
