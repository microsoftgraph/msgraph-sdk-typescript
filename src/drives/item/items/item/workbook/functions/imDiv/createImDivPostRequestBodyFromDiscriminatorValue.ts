import { deserializeIntoImDivPostRequestBody } from './deserializeIntoImDivPostRequestBody';
import { type ImDivPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createImDivPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoImDivPostRequestBody;
}
