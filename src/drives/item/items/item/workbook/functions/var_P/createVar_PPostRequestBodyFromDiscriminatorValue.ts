import {Var_PPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createVar_PPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Var_PPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Var_PPostRequestBody();
}
