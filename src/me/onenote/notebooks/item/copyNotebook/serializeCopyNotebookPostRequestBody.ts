import type {CopyNotebookPostRequestBody} from './copyNotebookPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCopyNotebookPostRequestBody(writer: SerializationWriter, copyNotebookPostRequestBody: CopyNotebookPostRequestBody | undefined = {} as CopyNotebookPostRequestBody) : void {
        writer.writeStringValue("groupId", copyNotebookPostRequestBody.groupId);
        writer.writeStringValue("notebookFolder", copyNotebookPostRequestBody.notebookFolder);
        writer.writeStringValue("renameAs", copyNotebookPostRequestBody.renameAs);
        writer.writeStringValue("siteCollectionId", copyNotebookPostRequestBody.siteCollectionId);
        writer.writeStringValue("siteId", copyNotebookPostRequestBody.siteId);
        writer.writeAdditionalData(copyNotebookPostRequestBody.additionalData);
}
