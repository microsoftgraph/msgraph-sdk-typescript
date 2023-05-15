import {deserializeIntoMobileAppAssignment} from './deserializeIntoMobileAppAssignment';
import {MobileAppAssignment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileAppAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMobileAppAssignment;
}
