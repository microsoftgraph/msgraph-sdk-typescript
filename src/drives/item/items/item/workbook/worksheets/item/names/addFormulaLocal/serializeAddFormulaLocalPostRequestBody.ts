import {AddFormulaLocalPostRequestBody} from './addFormulaLocalPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAddFormulaLocalPostRequestBody(addFormulaLocalPostRequestBody: AddFormulaLocalPostRequestBody | undefined = {} as AddFormulaLocalPostRequestBody, writer: SerializationWriter) : void {
        writer.writeStringValue("comment", addFormulaLocalPostRequestBody.comment);
        writer.writeStringValue("formula", addFormulaLocalPostRequestBody.formula);
        writer.writeStringValue("name", addFormulaLocalPostRequestBody.name);
        writer.writeAdditionalData(addFormulaLocalPostRequestBody.additionalData);
}
