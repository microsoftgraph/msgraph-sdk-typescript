import { deserializeIntoGetApplicablePolicyRequirementsResponse } from './deserializeIntoGetApplicablePolicyRequirementsResponse';
import { type GetApplicablePolicyRequirementsResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGetApplicablePolicyRequirementsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetApplicablePolicyRequirementsResponse;
}
