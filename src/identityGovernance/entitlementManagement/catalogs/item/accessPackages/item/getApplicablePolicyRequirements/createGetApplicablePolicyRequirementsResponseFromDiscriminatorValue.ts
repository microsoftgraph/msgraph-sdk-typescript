import {deserializeIntoGetApplicablePolicyRequirementsResponse} from './deserializeIntoGetApplicablePolicyRequirementsResponse';
import {GetApplicablePolicyRequirementsResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetApplicablePolicyRequirementsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetApplicablePolicyRequirementsResponse;
}
