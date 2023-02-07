import {TimePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTimePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : TimePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TimePostRequestBody();
}
