import type {ArchiveResponse} from './archiveResponse';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeArchiveResponse(writer: SerializationWriter, archiveResponse: ArchiveResponse | undefined = {} as ArchiveResponse) : void {
        writer.writeBooleanValue("value", archiveResponse.value);
        writer.writeAdditionalData(archiveResponse.additionalData);
}
