import {LookupPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLookupPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : LookupPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LookupPostRequestBody();
}
