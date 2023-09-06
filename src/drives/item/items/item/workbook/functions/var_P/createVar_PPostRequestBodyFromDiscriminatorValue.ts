import { deserializeIntoVar_PPostRequestBody } from './deserializeIntoVar_PPostRequestBody';
import { type Var_PPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createVar_PPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoVar_PPostRequestBody;
}
