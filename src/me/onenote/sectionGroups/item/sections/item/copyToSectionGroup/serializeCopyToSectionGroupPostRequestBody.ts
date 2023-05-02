import {CopyToSectionGroupPostRequestBody} from './copyToSectionGroupPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCopyToSectionGroupPostRequestBody(writer: SerializationWriter, copyToSectionGroupPostRequestBody: CopyToSectionGroupPostRequestBody | undefined = {} as CopyToSectionGroupPostRequestBody) : void {
        writer.writeStringValue("groupId", copyToSectionGroupPostRequestBody.groupId);
        writer.writeStringValue("id", copyToSectionGroupPostRequestBody.id);
        writer.writeStringValue("renameAs", copyToSectionGroupPostRequestBody.renameAs);
        writer.writeStringValue("siteCollectionId", copyToSectionGroupPostRequestBody.siteCollectionId);
        writer.writeStringValue("siteId", copyToSectionGroupPostRequestBody.siteId);
        writer.writeAdditionalData(copyToSectionGroupPostRequestBody.additionalData);
}
