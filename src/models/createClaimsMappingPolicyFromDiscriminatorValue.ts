import {ClaimsMappingPolicyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createClaimsMappingPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ClaimsMappingPolicyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ClaimsMappingPolicyImpl();
}
