import {ArchivePostRequestBody} from './archivePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoArchivePostRequestBody(archivePostRequestBody: ArchivePostRequestBody | undefined = {} as ArchivePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "shouldSetSpoSiteReadOnlyForMembers": n => { archivePostRequestBody.shouldSetSpoSiteReadOnlyForMembers = n.getBooleanValue(); },
    }
}
