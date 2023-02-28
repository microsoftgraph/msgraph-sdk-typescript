import {VarPAPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createVarPAPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : VarPAPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new VarPAPostRequestBody();
}
