import {deserializeIntoOddPostRequestBody} from './deserializeIntoOddPostRequestBody';
import {OddPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOddPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOddPostRequestBody;
}
