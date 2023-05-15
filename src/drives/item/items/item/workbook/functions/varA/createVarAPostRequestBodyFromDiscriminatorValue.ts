import {deserializeIntoVarAPostRequestBody} from './deserializeIntoVarAPostRequestBody';
import {VarAPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createVarAPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoVarAPostRequestBody;
}
