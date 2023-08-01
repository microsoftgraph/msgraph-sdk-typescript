import type {ExternalLink} from './externalLink';
import type {RecentNotebookLinks} from './recentNotebookLinks';
import {serializeExternalLink} from './serializeExternalLink';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRecentNotebookLinks(writer: SerializationWriter, recentNotebookLinks: RecentNotebookLinks | undefined = {} as RecentNotebookLinks) : void {
        writer.writeStringValue("@odata.type", recentNotebookLinks.odataType);
        writer.writeObjectValue<ExternalLink>("oneNoteClientUrl", recentNotebookLinks.oneNoteClientUrl, serializeExternalLink);
        writer.writeObjectValue<ExternalLink>("oneNoteWebUrl", recentNotebookLinks.oneNoteWebUrl, serializeExternalLink);
        writer.writeAdditionalData(recentNotebookLinks.additionalData);
}
