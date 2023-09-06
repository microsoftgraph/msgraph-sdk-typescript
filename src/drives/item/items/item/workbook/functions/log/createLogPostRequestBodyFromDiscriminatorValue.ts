import { deserializeIntoLogPostRequestBody } from './deserializeIntoLogPostRequestBody';
import { type LogPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createLogPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLogPostRequestBody;
}
