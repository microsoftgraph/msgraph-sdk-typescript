import { type ArchivePostRequestBody } from './archivePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeArchivePostRequestBody(writer: SerializationWriter, archivePostRequestBody: ArchivePostRequestBody | undefined = {} as ArchivePostRequestBody) : void {
        writer.writeBooleanValue("shouldSetSpoSiteReadOnlyForMembers", archivePostRequestBody.shouldSetSpoSiteReadOnlyForMembers);
        writer.writeAdditionalData(archivePostRequestBody.additionalData);
}
