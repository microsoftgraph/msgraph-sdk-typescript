import {ArchivePostRequestBody} from './archivePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeArchivePostRequestBody(archivePostRequestBody: ArchivePostRequestBody | undefined = {} as ArchivePostRequestBody, writer: SerializationWriter) : void {
        writer.writeBooleanValue("shouldSetSpoSiteReadOnlyForMembers", archivePostRequestBody.shouldSetSpoSiteReadOnlyForMembers);
        writer.writeAdditionalData(archivePostRequestBody.additionalData);
}
