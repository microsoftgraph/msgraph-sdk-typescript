import {createMobileAppContentFromDiscriminatorValue} from './createMobileAppContentFromDiscriminatorValue';
import {deserializeIntoManagedApp} from './deserializeIntoManagedApp';
import {ManagedMobileLobApp} from './managedMobileLobApp';
import {MobileAppContent} from './mobileAppContent';
import {serializeMobileAppContent} from './serializeMobileAppContent';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedMobileLobApp(managedMobileLobApp: ManagedMobileLobApp | undefined = {} as ManagedMobileLobApp) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoManagedApp(managedMobileLobApp),
        "committedContentVersion": n => { managedMobileLobApp.committedContentVersion = n.getStringValue(); },
        "contentVersions": n => { managedMobileLobApp.contentVersions = n.getCollectionOfObjectValues<MobileAppContent>(createMobileAppContentFromDiscriminatorValue); },
        "fileName": n => { managedMobileLobApp.fileName = n.getStringValue(); },
        "size": n => { managedMobileLobApp.size = n.getNumberValue(); },
    }
}
