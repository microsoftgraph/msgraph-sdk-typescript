import {CountAPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCountAPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CountAPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CountAPostRequestBody();
}
