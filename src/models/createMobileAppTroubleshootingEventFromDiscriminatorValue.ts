import { deserializeIntoMobileAppTroubleshootingEvent } from './deserializeIntoMobileAppTroubleshootingEvent';
import { type MobileAppTroubleshootingEvent } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMobileAppTroubleshootingEventFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMobileAppTroubleshootingEvent;
}
