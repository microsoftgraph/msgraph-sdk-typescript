import {deserializeIntoProvisionOnDemandPostRequestBody} from './deserializeIntoProvisionOnDemandPostRequestBody';
import {ProvisionOnDemandPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProvisionOnDemandPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoProvisionOnDemandPostRequestBody;
}
