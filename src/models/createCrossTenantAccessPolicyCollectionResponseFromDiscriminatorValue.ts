import {CrossTenantAccessPolicyCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCrossTenantAccessPolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : CrossTenantAccessPolicyCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CrossTenantAccessPolicyCollectionResponse();
}
