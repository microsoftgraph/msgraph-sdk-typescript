import {VlookupPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createVlookupPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : VlookupPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new VlookupPostRequestBody();
}
