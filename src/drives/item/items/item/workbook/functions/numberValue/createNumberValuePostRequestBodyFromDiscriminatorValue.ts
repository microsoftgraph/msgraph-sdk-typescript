import { deserializeIntoNumberValuePostRequestBody } from './deserializeIntoNumberValuePostRequestBody';
import { type NumberValuePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createNumberValuePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoNumberValuePostRequestBody;
}
