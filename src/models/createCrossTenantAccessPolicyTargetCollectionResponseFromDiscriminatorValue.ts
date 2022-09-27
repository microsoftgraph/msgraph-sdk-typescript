import {CrossTenantAccessPolicyTargetCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCrossTenantAccessPolicyTargetCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : CrossTenantAccessPolicyTargetCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CrossTenantAccessPolicyTargetCollectionResponse();
}
