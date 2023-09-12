import { deserializeIntoCodePostRequestBody } from './deserializeIntoCodePostRequestBody';
import { type CodePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCodePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCodePostRequestBody;
}
