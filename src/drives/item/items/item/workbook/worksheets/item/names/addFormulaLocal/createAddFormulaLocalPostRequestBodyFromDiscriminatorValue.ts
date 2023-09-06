import { deserializeIntoAddFormulaLocalPostRequestBody } from './deserializeIntoAddFormulaLocalPostRequestBody';
import { type AddFormulaLocalPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAddFormulaLocalPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAddFormulaLocalPostRequestBody;
}
