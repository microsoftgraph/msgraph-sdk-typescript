import {IsFormulaPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIsFormulaPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : IsFormulaPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IsFormulaPostRequestBody();
}
