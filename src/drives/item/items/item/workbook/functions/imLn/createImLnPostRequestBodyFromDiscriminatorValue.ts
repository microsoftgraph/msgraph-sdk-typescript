import {deserializeIntoImLnPostRequestBody} from './deserializeIntoImLnPostRequestBody';
import {ImLnPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImLnPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoImLnPostRequestBody;
}
