import type {AddFormulaLocalPostRequestBody} from './addFormulaLocalPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAddFormulaLocalPostRequestBody(addFormulaLocalPostRequestBody: AddFormulaLocalPostRequestBody | undefined = {} as AddFormulaLocalPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "comment": n => { addFormulaLocalPostRequestBody.comment = n.getStringValue(); },
        "formula": n => { addFormulaLocalPostRequestBody.formula = n.getStringValue(); },
        "name": n => { addFormulaLocalPostRequestBody.name = n.getStringValue(); },
    }
}
