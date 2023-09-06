import { deserializeIntoFindPostRequestBody } from './deserializeIntoFindPostRequestBody';
import { type FindPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createFindPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFindPostRequestBody;
}
