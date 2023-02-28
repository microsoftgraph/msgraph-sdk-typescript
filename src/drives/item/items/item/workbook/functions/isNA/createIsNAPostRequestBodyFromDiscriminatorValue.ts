import {IsNAPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIsNAPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : IsNAPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IsNAPostRequestBody();
}
