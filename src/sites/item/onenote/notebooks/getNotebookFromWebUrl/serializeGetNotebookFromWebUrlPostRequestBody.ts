import { type GetNotebookFromWebUrlPostRequestBody } from './getNotebookFromWebUrlPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeGetNotebookFromWebUrlPostRequestBody(writer: SerializationWriter, getNotebookFromWebUrlPostRequestBody: GetNotebookFromWebUrlPostRequestBody | undefined = {} as GetNotebookFromWebUrlPostRequestBody) : void {
        writer.writeStringValue("webUrl", getNotebookFromWebUrlPostRequestBody.webUrl);
        writer.writeAdditionalData(getNotebookFromWebUrlPostRequestBody.additionalData);
}
