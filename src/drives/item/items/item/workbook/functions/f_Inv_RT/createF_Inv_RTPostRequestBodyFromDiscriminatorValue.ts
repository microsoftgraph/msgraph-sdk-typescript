import { deserializeIntoF_Inv_RTPostRequestBody } from './deserializeIntoF_Inv_RTPostRequestBody';
import { type F_Inv_RTPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createF_Inv_RTPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoF_Inv_RTPostRequestBody;
}
