import type {CopyNotebookPostRequestBody} from './copyNotebookPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCopyNotebookPostRequestBody(copyNotebookPostRequestBody: CopyNotebookPostRequestBody | undefined = {} as CopyNotebookPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "groupId": n => { copyNotebookPostRequestBody.groupId = n.getStringValue(); },
        "notebookFolder": n => { copyNotebookPostRequestBody.notebookFolder = n.getStringValue(); },
        "renameAs": n => { copyNotebookPostRequestBody.renameAs = n.getStringValue(); },
        "siteCollectionId": n => { copyNotebookPostRequestBody.siteCollectionId = n.getStringValue(); },
        "siteId": n => { copyNotebookPostRequestBody.siteId = n.getStringValue(); },
    }
}
