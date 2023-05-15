import {createMobileAppContentFileFromDiscriminatorValue} from './createMobileAppContentFileFromDiscriminatorValue';
import {createMobileContainedAppFromDiscriminatorValue} from './createMobileContainedAppFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {MobileAppContent} from './mobileAppContent';
import {MobileAppContentFile} from './mobileAppContentFile';
import {MobileContainedApp} from './mobileContainedApp';
import {serializeMobileAppContentFile} from './serializeMobileAppContentFile';
import {serializeMobileContainedApp} from './serializeMobileContainedApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMobileAppContent(mobileAppContent: MobileAppContent | undefined = {} as MobileAppContent) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(mobileAppContent),
        "containedApps": n => { mobileAppContent.containedApps = n.getCollectionOfObjectValues<MobileContainedApp>(createMobileContainedAppFromDiscriminatorValue); },
        "files": n => { mobileAppContent.files = n.getCollectionOfObjectValues<MobileAppContentFile>(createMobileAppContentFileFromDiscriminatorValue); },
    }
}
