import {deserializeIntoPhiPostRequestBody} from './deserializeIntoPhiPostRequestBody';
import {PhiPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPhiPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPhiPostRequestBody;
}
