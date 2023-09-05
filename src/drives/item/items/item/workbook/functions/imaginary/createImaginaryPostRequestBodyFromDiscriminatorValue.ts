import { deserializeIntoImaginaryPostRequestBody } from './deserializeIntoImaginaryPostRequestBody';
import { type ImaginaryPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createImaginaryPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoImaginaryPostRequestBody;
}
