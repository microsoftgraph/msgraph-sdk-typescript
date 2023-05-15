import {deserializeIntoHlookupPostRequestBody} from './deserializeIntoHlookupPostRequestBody';
import {HlookupPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createHlookupPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoHlookupPostRequestBody;
}
