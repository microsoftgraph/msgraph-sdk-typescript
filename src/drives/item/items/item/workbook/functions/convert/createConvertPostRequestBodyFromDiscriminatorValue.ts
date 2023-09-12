import { deserializeIntoConvertPostRequestBody } from './deserializeIntoConvertPostRequestBody';
import { type ConvertPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createConvertPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConvertPostRequestBody;
}
