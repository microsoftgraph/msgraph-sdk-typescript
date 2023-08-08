import type {CopyToSectionPostRequestBody} from './copyToSectionPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCopyToSectionPostRequestBody(writer: SerializationWriter, copyToSectionPostRequestBody: CopyToSectionPostRequestBody | undefined = {} as CopyToSectionPostRequestBody) : void {
        writer.writeStringValue("groupId", copyToSectionPostRequestBody.groupId);
        writer.writeStringValue("id", copyToSectionPostRequestBody.id);
        writer.writeStringValue("siteCollectionId", copyToSectionPostRequestBody.siteCollectionId);
        writer.writeStringValue("siteId", copyToSectionPostRequestBody.siteId);
        writer.writeAdditionalData(copyToSectionPostRequestBody.additionalData);
}
