import {CopyToSectionGroupPostRequestBody} from './copyToSectionGroupPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCopyToSectionGroupPostRequestBody(copyToSectionGroupPostRequestBody: CopyToSectionGroupPostRequestBody | undefined = {} as CopyToSectionGroupPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "groupId": n => { copyToSectionGroupPostRequestBody.groupId = n.getStringValue(); },
        "id": n => { copyToSectionGroupPostRequestBody.id = n.getStringValue(); },
        "renameAs": n => { copyToSectionGroupPostRequestBody.renameAs = n.getStringValue(); },
        "siteCollectionId": n => { copyToSectionGroupPostRequestBody.siteCollectionId = n.getStringValue(); },
        "siteId": n => { copyToSectionGroupPostRequestBody.siteId = n.getStringValue(); },
    }
}
