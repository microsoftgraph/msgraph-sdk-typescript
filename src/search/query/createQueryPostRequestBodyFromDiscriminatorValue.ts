import { deserializeIntoQueryPostRequestBody } from './deserializeIntoQueryPostRequestBody';
import { type QueryPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createQueryPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoQueryPostRequestBody;
}
