import {deserializeIntoMobileAppAssignmentCollectionResponse} from './deserializeIntoMobileAppAssignmentCollectionResponse';
import {MobileAppAssignmentCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileAppAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMobileAppAssignmentCollectionResponse;
}
