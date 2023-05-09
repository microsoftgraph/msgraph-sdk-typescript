import {CopyToNotebookPostRequestBody} from './copyToNotebookPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCopyToNotebookPostRequestBody(copyToNotebookPostRequestBody: CopyToNotebookPostRequestBody | undefined = {} as CopyToNotebookPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "groupId": n => { copyToNotebookPostRequestBody.groupId = n.getStringValue(); },
        "id": n => { copyToNotebookPostRequestBody.id = n.getStringValue(); },
        "renameAs": n => { copyToNotebookPostRequestBody.renameAs = n.getStringValue(); },
        "siteCollectionId": n => { copyToNotebookPostRequestBody.siteCollectionId = n.getStringValue(); },
        "siteId": n => { copyToNotebookPostRequestBody.siteId = n.getStringValue(); },
    }
}
