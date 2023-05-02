import {deserializeIntoPublishPostRequestBody} from './deserializeIntoPublishPostRequestBody';
import {PublishPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPublishPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPublishPostRequestBody;
}
