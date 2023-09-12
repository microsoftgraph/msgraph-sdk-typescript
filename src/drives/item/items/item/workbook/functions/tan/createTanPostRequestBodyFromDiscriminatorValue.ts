import { deserializeIntoTanPostRequestBody } from './deserializeIntoTanPostRequestBody';
import { type TanPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTanPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTanPostRequestBody;
}
