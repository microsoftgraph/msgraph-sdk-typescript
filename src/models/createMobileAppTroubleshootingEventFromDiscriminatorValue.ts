import {deserializeIntoMobileAppTroubleshootingEvent} from './deserializeIntoMobileAppTroubleshootingEvent';
import {MobileAppTroubleshootingEvent} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileAppTroubleshootingEventFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMobileAppTroubleshootingEvent;
}
