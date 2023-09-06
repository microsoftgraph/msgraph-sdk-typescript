import { createExternalLinkFromDiscriminatorValue } from './createExternalLinkFromDiscriminatorValue';
import { type ExternalLink } from './externalLink';
import { type NotebookLinks } from './notebookLinks';
import { serializeExternalLink } from './serializeExternalLink';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoNotebookLinks(notebookLinks: NotebookLinks | undefined = {} as NotebookLinks) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { notebookLinks.odataType = n.getStringValue(); },
        "oneNoteClientUrl": n => { notebookLinks.oneNoteClientUrl = n.getObjectValue<ExternalLink>(createExternalLinkFromDiscriminatorValue); },
        "oneNoteWebUrl": n => { notebookLinks.oneNoteWebUrl = n.getObjectValue<ExternalLink>(createExternalLinkFromDiscriminatorValue); },
    }
}
