import {TermsAndConditionsAssignmentCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTermsAndConditionsAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TermsAndConditionsAssignmentCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TermsAndConditionsAssignmentCollectionResponseImpl();
}
