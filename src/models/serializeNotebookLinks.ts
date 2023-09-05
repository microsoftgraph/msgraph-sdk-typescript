import { type ExternalLink } from './externalLink';
import { type NotebookLinks } from './notebookLinks';
import { serializeExternalLink } from './serializeExternalLink';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeNotebookLinks(writer: SerializationWriter, notebookLinks: NotebookLinks | undefined = {} as NotebookLinks) : void {
        writer.writeStringValue("@odata.type", notebookLinks.odataType);
        writer.writeObjectValue<ExternalLink>("oneNoteClientUrl", notebookLinks.oneNoteClientUrl, serializeExternalLink);
        writer.writeObjectValue<ExternalLink>("oneNoteWebUrl", notebookLinks.oneNoteWebUrl, serializeExternalLink);
        writer.writeAdditionalData(notebookLinks.additionalData);
}
