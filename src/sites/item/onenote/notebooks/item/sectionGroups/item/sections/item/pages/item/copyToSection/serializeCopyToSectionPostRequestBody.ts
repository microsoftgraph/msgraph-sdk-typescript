import {CopyToSectionPostRequestBody} from './copyToSectionPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCopyToSectionPostRequestBody(copyToSectionPostRequestBody: CopyToSectionPostRequestBody | undefined = {} as CopyToSectionPostRequestBody, writer: SerializationWriter) : void {
        writer.writeStringValue("groupId", copyToSectionPostRequestBody.groupId);
        writer.writeStringValue("id", copyToSectionPostRequestBody.id);
        writer.writeStringValue("siteCollectionId", copyToSectionPostRequestBody.siteCollectionId);
        writer.writeStringValue("siteId", copyToSectionPostRequestBody.siteId);
        writer.writeAdditionalData(copyToSectionPostRequestBody.additionalData);
}
