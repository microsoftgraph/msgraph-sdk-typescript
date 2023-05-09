import {ArchivePostRequestBody} from './archivePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeArchivePostRequestBody(writer: SerializationWriter, archivePostRequestBody: ArchivePostRequestBody | undefined = {} as ArchivePostRequestBody) : void {
        writer.writeBooleanValue("shouldSetSpoSiteReadOnlyForMembers", archivePostRequestBody.shouldSetSpoSiteReadOnlyForMembers);
        writer.writeAdditionalData(archivePostRequestBody.additionalData);
}
