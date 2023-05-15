import {deserializeIntoT_DistPostRequestBody} from './deserializeIntoT_DistPostRequestBody';
import {T_DistPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createT_DistPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoT_DistPostRequestBody;
}
