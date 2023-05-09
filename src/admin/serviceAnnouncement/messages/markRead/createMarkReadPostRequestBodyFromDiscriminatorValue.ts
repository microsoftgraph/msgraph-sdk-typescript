import {deserializeIntoMarkReadPostRequestBody} from './deserializeIntoMarkReadPostRequestBody';
import {MarkReadPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMarkReadPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMarkReadPostRequestBody;
}
