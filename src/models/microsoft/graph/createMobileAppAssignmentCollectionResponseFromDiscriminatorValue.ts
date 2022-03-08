import {MobileAppAssignmentCollectionResponse} from './mobileAppAssignmentCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileAppAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : MobileAppAssignmentCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MobileAppAssignmentCollectionResponse();
}
