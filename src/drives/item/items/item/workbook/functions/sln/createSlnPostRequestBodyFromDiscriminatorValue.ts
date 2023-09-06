import { deserializeIntoSlnPostRequestBody } from './deserializeIntoSlnPostRequestBody';
import { type SlnPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSlnPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSlnPostRequestBody;
}
