import {AddFormulaLocalPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddFormulaLocalPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddFormulaLocalPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddFormulaLocalPostRequestBody();
}
