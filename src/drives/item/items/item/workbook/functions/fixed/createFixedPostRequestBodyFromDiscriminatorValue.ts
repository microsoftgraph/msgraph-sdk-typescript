import {deserializeIntoFixedPostRequestBody} from './deserializeIntoFixedPostRequestBody';
import {FixedPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFixedPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFixedPostRequestBody;
}
