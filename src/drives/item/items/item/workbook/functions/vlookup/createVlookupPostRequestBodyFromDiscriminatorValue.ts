import {deserializeIntoVlookupPostRequestBody} from './deserializeIntoVlookupPostRequestBody';
import {VlookupPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createVlookupPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoVlookupPostRequestBody;
}
