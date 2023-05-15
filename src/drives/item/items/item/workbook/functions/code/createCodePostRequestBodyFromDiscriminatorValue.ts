import {deserializeIntoCodePostRequestBody} from './deserializeIntoCodePostRequestBody';
import {CodePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCodePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCodePostRequestBody;
}
