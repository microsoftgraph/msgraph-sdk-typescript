import {IsLogicalPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIsLogicalPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : IsLogicalPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IsLogicalPostRequestBody();
}
