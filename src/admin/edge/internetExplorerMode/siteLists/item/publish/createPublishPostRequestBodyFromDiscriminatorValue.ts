import {PublishPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPublishPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : PublishPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PublishPostRequestBody();
}
