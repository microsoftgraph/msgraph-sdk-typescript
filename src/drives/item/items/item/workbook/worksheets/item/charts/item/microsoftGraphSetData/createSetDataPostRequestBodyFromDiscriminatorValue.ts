import {SetDataPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSetDataPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SetDataPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SetDataPostRequestBody();
}
