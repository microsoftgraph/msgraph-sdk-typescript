import {EnrollmentTroubleshootingEventImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEnrollmentTroubleshootingEventFromDiscriminatorValue(parseNode: ParseNode | undefined) : EnrollmentTroubleshootingEventImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EnrollmentTroubleshootingEventImpl();
}
