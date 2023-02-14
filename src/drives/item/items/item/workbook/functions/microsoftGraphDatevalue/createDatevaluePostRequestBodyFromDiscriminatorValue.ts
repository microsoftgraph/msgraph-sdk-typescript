import {DatevaluePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDatevaluePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : DatevaluePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DatevaluePostRequestBody();
}
