import { deserializeIntoF_Dist_RTPostRequestBody } from './deserializeIntoF_Dist_RTPostRequestBody';
import { type F_Dist_RTPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createF_Dist_RTPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoF_Dist_RTPostRequestBody;
}
