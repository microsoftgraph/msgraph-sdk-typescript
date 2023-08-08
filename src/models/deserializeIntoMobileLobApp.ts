import {createMobileAppContentFromDiscriminatorValue} from './createMobileAppContentFromDiscriminatorValue';
import {deserializeIntoMobileApp} from './deserializeIntoMobileApp';
import type {MobileAppContent} from './mobileAppContent';
import type {MobileLobApp} from './mobileLobApp';
import {serializeMobileAppContent} from './serializeMobileAppContent';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMobileLobApp(mobileLobApp: MobileLobApp | undefined = {} as MobileLobApp) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileApp(mobileLobApp),
        "committedContentVersion": n => { mobileLobApp.committedContentVersion = n.getStringValue(); },
        "contentVersions": n => { mobileLobApp.contentVersions = n.getCollectionOfObjectValues<MobileAppContent>(createMobileAppContentFromDiscriminatorValue); },
        "fileName": n => { mobileLobApp.fileName = n.getStringValue(); },
        "size": n => { mobileLobApp.size = n.getNumberValue(); },
    }
}
