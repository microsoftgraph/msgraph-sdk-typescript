import { type CopyToSectionPostRequestBody } from './copyToSectionPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoCopyToSectionPostRequestBody(copyToSectionPostRequestBody: CopyToSectionPostRequestBody | undefined = {} as CopyToSectionPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "groupId": n => { copyToSectionPostRequestBody.groupId = n.getStringValue(); },
        "id": n => { copyToSectionPostRequestBody.id = n.getStringValue(); },
        "siteCollectionId": n => { copyToSectionPostRequestBody.siteCollectionId = n.getStringValue(); },
        "siteId": n => { copyToSectionPostRequestBody.siteId = n.getStringValue(); },
    }
}
