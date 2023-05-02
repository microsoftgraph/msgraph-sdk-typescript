import {ArchivePostRequestBody} from './archivePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeArchivePostRequestBody(writer: SerializationWriter, archivePostRequestBody: ArchivePostRequestBody | undefined = {} as ArchivePostRequestBody) : void {
        writer.writeCollectionOfPrimitiveValues<string>("messageIds", archivePostRequestBody.messageIds);
        writer.writeAdditionalData(archivePostRequestBody.additionalData);
}
