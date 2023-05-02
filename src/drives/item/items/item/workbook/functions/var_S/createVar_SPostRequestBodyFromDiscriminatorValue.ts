import {deserializeIntoVar_SPostRequestBody} from './deserializeIntoVar_SPostRequestBody';
import {Var_SPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createVar_SPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoVar_SPostRequestBody;
}
