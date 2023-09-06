import { deserializeIntoImArgumentPostRequestBody } from './deserializeIntoImArgumentPostRequestBody';
import { type ImArgumentPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createImArgumentPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoImArgumentPostRequestBody;
}
