import {deserializeIntoIsFormulaPostRequestBody} from './deserializeIntoIsFormulaPostRequestBody';
import {IsFormulaPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIsFormulaPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIsFormulaPostRequestBody;
}
