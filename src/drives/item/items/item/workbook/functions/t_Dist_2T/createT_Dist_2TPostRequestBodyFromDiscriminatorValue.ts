import { deserializeIntoT_Dist_2TPostRequestBody } from './deserializeIntoT_Dist_2TPostRequestBody';
import { type T_Dist_2TPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createT_Dist_2TPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoT_Dist_2TPostRequestBody;
}
