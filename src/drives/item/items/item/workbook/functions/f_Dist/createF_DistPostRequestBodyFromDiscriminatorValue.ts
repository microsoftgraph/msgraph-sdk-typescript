import { deserializeIntoF_DistPostRequestBody } from './deserializeIntoF_DistPostRequestBody';
import { type F_DistPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createF_DistPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoF_DistPostRequestBody;
}
