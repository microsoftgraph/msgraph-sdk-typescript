import { deserializeIntoCreateSessionPostRequestBody } from './deserializeIntoCreateSessionPostRequestBody';
import { type CreateSessionPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCreateSessionPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCreateSessionPostRequestBody;
}
