import {deserializeIntoDeltaPostRequestBody} from './deserializeIntoDeltaPostRequestBody';
import {DeltaPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeltaPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeltaPostRequestBody;
}
