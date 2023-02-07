import {Var_SPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createVar_SPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Var_SPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Var_SPostRequestBody();
}
