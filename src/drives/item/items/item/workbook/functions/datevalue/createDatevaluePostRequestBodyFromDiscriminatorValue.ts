import {deserializeIntoDatevaluePostRequestBody} from './deserializeIntoDatevaluePostRequestBody';
import {DatevaluePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDatevaluePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDatevaluePostRequestBody;
}
