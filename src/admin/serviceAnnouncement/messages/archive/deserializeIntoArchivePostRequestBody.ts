import { type ArchivePostRequestBody } from './archivePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoArchivePostRequestBody(archivePostRequestBody: ArchivePostRequestBody | undefined = {} as ArchivePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "messageIds": n => { archivePostRequestBody.messageIds = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
