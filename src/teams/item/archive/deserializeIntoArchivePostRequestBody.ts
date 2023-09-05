import { type ArchivePostRequestBody } from './archivePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoArchivePostRequestBody(archivePostRequestBody: ArchivePostRequestBody | undefined = {} as ArchivePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "shouldSetSpoSiteReadOnlyForMembers": n => { archivePostRequestBody.shouldSetSpoSiteReadOnlyForMembers = n.getBooleanValue(); },
    }
}
