import { deserializeIntoFindBPostRequestBody } from './deserializeIntoFindBPostRequestBody';
import { type FindBPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createFindBPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFindBPostRequestBody;
}
