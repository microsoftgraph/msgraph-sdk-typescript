import {deserializeIntoVarPAPostRequestBody} from './deserializeIntoVarPAPostRequestBody';
import {VarPAPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createVarPAPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoVarPAPostRequestBody;
}
