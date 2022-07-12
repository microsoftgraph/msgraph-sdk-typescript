import {GetApplicablePolicyRequirementsMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetApplicablePolicyRequirementsMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : GetApplicablePolicyRequirementsMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetApplicablePolicyRequirementsMember1();
}
