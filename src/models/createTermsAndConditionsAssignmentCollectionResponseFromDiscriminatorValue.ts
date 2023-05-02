import {deserializeIntoTermsAndConditionsAssignmentCollectionResponse} from './deserializeIntoTermsAndConditionsAssignmentCollectionResponse';
import {TermsAndConditionsAssignmentCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTermsAndConditionsAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTermsAndConditionsAssignmentCollectionResponse;
}
