import { deserializeIntoCountBlankPostRequestBody } from './deserializeIntoCountBlankPostRequestBody';
import { type CountBlankPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCountBlankPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCountBlankPostRequestBody;
}
