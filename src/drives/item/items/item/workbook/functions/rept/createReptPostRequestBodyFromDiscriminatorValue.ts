import { deserializeIntoReptPostRequestBody } from './deserializeIntoReptPostRequestBody';
import { type ReptPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createReptPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoReptPostRequestBody;
}
