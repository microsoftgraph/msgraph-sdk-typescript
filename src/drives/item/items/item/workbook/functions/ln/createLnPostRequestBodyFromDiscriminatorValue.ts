import {deserializeIntoLnPostRequestBody} from './deserializeIntoLnPostRequestBody';
import {LnPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLnPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLnPostRequestBody;
}
