import { deserializeIntoProvisionOnDemandPostRequestBody } from './deserializeIntoProvisionOnDemandPostRequestBody';
import { type ProvisionOnDemandPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createProvisionOnDemandPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoProvisionOnDemandPostRequestBody;
}
