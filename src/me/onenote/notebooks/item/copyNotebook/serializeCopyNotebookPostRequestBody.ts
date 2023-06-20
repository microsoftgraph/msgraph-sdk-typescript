import {CopyNotebookPostRequestBody} from './copyNotebookPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCopyNotebookPostRequestBody(copyNotebookPostRequestBody: CopyNotebookPostRequestBody | undefined = {} as CopyNotebookPostRequestBody, writer: SerializationWriter) : void {
        writer.writeStringValue("groupId", copyNotebookPostRequestBody.groupId);
        writer.writeStringValue("notebookFolder", copyNotebookPostRequestBody.notebookFolder);
        writer.writeStringValue("renameAs", copyNotebookPostRequestBody.renameAs);
        writer.writeStringValue("siteCollectionId", copyNotebookPostRequestBody.siteCollectionId);
        writer.writeStringValue("siteId", copyNotebookPostRequestBody.siteId);
        writer.writeAdditionalData(copyNotebookPostRequestBody.additionalData);
}
