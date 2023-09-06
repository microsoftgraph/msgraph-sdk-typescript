import { deserializeIntoEnrollmentTroubleshootingEvent } from './deserializeIntoEnrollmentTroubleshootingEvent';
import { type EnrollmentTroubleshootingEvent } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEnrollmentTroubleshootingEventFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEnrollmentTroubleshootingEvent;
}
