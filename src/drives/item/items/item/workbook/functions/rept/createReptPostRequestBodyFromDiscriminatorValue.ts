import {deserializeIntoReptPostRequestBody} from './deserializeIntoReptPostRequestBody';
import {ReptPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createReptPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoReptPostRequestBody;
}
