import {deserializeIntoMobileAppTroubleshootingEventCollectionResponse} from './deserializeIntoMobileAppTroubleshootingEventCollectionResponse';
import {MobileAppTroubleshootingEventCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileAppTroubleshootingEventCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMobileAppTroubleshootingEventCollectionResponse;
}
