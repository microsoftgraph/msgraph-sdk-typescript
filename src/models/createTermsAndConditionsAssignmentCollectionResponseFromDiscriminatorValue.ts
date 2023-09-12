import { deserializeIntoTermsAndConditionsAssignmentCollectionResponse } from './deserializeIntoTermsAndConditionsAssignmentCollectionResponse';
import { type TermsAndConditionsAssignmentCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTermsAndConditionsAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTermsAndConditionsAssignmentCollectionResponse;
}
