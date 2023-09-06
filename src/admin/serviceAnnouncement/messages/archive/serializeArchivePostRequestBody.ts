import { type ArchivePostRequestBody } from './archivePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeArchivePostRequestBody(writer: SerializationWriter, archivePostRequestBody: ArchivePostRequestBody | undefined = {} as ArchivePostRequestBody) : void {
        writer.writeCollectionOfPrimitiveValues<string>("messageIds", archivePostRequestBody.messageIds);
        writer.writeAdditionalData(archivePostRequestBody.additionalData);
}
