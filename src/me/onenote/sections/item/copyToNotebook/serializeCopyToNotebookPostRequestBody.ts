import {CopyToNotebookPostRequestBody} from './copyToNotebookPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCopyToNotebookPostRequestBody(copyToNotebookPostRequestBody: CopyToNotebookPostRequestBody | undefined = {} as CopyToNotebookPostRequestBody, writer: SerializationWriter) : void {
        writer.writeStringValue("groupId", copyToNotebookPostRequestBody.groupId);
        writer.writeStringValue("id", copyToNotebookPostRequestBody.id);
        writer.writeStringValue("renameAs", copyToNotebookPostRequestBody.renameAs);
        writer.writeStringValue("siteCollectionId", copyToNotebookPostRequestBody.siteCollectionId);
        writer.writeStringValue("siteId", copyToNotebookPostRequestBody.siteId);
        writer.writeAdditionalData(copyToNotebookPostRequestBody.additionalData);
}
