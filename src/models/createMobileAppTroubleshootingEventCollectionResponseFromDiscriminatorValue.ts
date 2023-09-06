import { deserializeIntoMobileAppTroubleshootingEventCollectionResponse } from './deserializeIntoMobileAppTroubleshootingEventCollectionResponse';
import { type MobileAppTroubleshootingEventCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMobileAppTroubleshootingEventCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMobileAppTroubleshootingEventCollectionResponse;
}
