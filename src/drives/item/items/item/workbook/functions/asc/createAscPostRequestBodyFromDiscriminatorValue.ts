import {deserializeIntoAscPostRequestBody} from './deserializeIntoAscPostRequestBody';
import {AscPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAscPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAscPostRequestBody;
}
