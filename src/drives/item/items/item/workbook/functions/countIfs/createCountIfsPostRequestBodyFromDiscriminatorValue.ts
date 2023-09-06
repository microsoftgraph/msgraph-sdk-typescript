import { deserializeIntoCountIfsPostRequestBody } from './deserializeIntoCountIfsPostRequestBody';
import { type CountIfsPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCountIfsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCountIfsPostRequestBody;
}
