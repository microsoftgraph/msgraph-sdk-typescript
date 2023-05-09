import {deserializeIntoMirrPostRequestBody} from './deserializeIntoMirrPostRequestBody';
import {MirrPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMirrPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMirrPostRequestBody;
}
