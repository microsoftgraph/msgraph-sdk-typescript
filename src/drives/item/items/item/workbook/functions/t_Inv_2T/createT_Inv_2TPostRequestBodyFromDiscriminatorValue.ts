import {deserializeIntoT_Inv_2TPostRequestBody} from './deserializeIntoT_Inv_2TPostRequestBody';
import {T_Inv_2TPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createT_Inv_2TPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoT_Inv_2TPostRequestBody;
}
