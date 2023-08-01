import type {AddFormulaLocalPostRequestBody} from './addFormulaLocalPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAddFormulaLocalPostRequestBody(writer: SerializationWriter, addFormulaLocalPostRequestBody: AddFormulaLocalPostRequestBody | undefined = {} as AddFormulaLocalPostRequestBody) : void {
        writer.writeStringValue("comment", addFormulaLocalPostRequestBody.comment);
        writer.writeStringValue("formula", addFormulaLocalPostRequestBody.formula);
        writer.writeStringValue("name", addFormulaLocalPostRequestBody.name);
        writer.writeAdditionalData(addFormulaLocalPostRequestBody.additionalData);
}
