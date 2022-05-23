import {MobileAppAssignmentImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileAppAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : MobileAppAssignmentImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MobileAppAssignmentImpl();
}
