import {deserializeIntoCothPostRequestBody} from './deserializeIntoCothPostRequestBody';
import {CothPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCothPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCothPostRequestBody;
}
