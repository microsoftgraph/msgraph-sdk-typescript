import {deserializeIntoTimevaluePostRequestBody} from './deserializeIntoTimevaluePostRequestBody';
import {TimevaluePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTimevaluePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTimevaluePostRequestBody;
}
