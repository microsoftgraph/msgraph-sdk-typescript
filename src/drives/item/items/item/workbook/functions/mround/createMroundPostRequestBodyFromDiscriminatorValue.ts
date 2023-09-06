import { deserializeIntoMroundPostRequestBody } from './deserializeIntoMroundPostRequestBody';
import { type MroundPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMroundPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMroundPostRequestBody;
}
