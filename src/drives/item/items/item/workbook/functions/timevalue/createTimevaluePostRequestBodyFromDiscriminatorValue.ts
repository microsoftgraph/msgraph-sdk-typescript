import {TimevaluePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTimevaluePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : TimevaluePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TimevaluePostRequestBody();
}
