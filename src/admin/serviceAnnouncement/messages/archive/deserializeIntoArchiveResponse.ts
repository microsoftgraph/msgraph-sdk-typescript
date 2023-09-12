import { type ArchiveResponse } from './archiveResponse';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoArchiveResponse(archiveResponse: ArchiveResponse | undefined = {} as ArchiveResponse) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { archiveResponse.value = n.getBooleanValue(); },
    }
}
