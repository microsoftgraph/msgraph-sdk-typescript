import {EnrollmentTroubleshootingEvent} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEnrollmentTroubleshootingEventFromDiscriminatorValue(parseNode: ParseNode | undefined) : EnrollmentTroubleshootingEvent {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EnrollmentTroubleshootingEvent();
}
