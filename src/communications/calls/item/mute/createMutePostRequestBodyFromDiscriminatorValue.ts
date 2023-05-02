import {deserializeIntoMutePostRequestBody} from './deserializeIntoMutePostRequestBody';
import {MutePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMutePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMutePostRequestBody;
}
