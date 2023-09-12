import { deserializeIntoDecimalPostRequestBody } from './deserializeIntoDecimalPostRequestBody';
import { type DecimalPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDecimalPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDecimalPostRequestBody;
}
