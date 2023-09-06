import { deserializeIntoMobileAppAssignmentCollectionResponse } from './deserializeIntoMobileAppAssignmentCollectionResponse';
import { type MobileAppAssignmentCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMobileAppAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMobileAppAssignmentCollectionResponse;
}
