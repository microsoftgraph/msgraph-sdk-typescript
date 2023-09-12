import { deserializeIntoFvPostRequestBody } from './deserializeIntoFvPostRequestBody';
import { type FvPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createFvPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFvPostRequestBody;
}
