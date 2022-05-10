import {MobileAppAssignmentCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileAppAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : MobileAppAssignmentCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MobileAppAssignmentCollectionResponseImpl();
}
