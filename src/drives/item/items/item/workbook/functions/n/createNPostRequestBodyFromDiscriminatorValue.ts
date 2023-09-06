import { deserializeIntoNPostRequestBody } from './deserializeIntoNPostRequestBody';
import { type NPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createNPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoNPostRequestBody;
}
