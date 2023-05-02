import {ArchiveResponse} from './archiveResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoArchiveResponse(archiveResponse: ArchiveResponse | undefined = {} as ArchiveResponse) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { archiveResponse.value = n.getBooleanValue(); },
    }
}
