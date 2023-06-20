import {ArchiveResponse} from './archiveResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeArchiveResponse(archiveResponse: ArchiveResponse | undefined = {} as ArchiveResponse, writer: SerializationWriter) : void {
        writer.writeBooleanValue("value", archiveResponse.value);
        writer.writeAdditionalData(archiveResponse.additionalData);
}
