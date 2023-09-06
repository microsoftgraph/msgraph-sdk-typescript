import { deserializeIntoZ_TestPostRequestBody } from './deserializeIntoZ_TestPostRequestBody';
import { type Z_TestPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createZ_TestPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoZ_TestPostRequestBody;
}
