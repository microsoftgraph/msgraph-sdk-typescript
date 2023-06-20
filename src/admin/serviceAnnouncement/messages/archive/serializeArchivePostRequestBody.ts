import {ArchivePostRequestBody} from './archivePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeArchivePostRequestBody(archivePostRequestBody: ArchivePostRequestBody | undefined = {} as ArchivePostRequestBody, writer: SerializationWriter) : void {
        writer.writeCollectionOfPrimitiveValues<string>("messageIds", archivePostRequestBody.messageIds);
        writer.writeAdditionalData(archivePostRequestBody.additionalData);
}
