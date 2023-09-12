import { deserializeIntoAtan2PostRequestBody } from './deserializeIntoAtan2PostRequestBody';
import { type Atan2PostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAtan2PostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAtan2PostRequestBody;
}
