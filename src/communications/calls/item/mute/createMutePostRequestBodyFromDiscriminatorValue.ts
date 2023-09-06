import { deserializeIntoMutePostRequestBody } from './deserializeIntoMutePostRequestBody';
import { type MutePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMutePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMutePostRequestBody;
}
