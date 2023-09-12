import { deserializeIntoImSecPostRequestBody } from './deserializeIntoImSecPostRequestBody';
import { type ImSecPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createImSecPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoImSecPostRequestBody;
}
