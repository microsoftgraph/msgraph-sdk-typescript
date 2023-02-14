import {VarAPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createVarAPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : VarAPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new VarAPostRequestBody();
}
