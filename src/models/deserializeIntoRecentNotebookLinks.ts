import {createExternalLinkFromDiscriminatorValue} from './createExternalLinkFromDiscriminatorValue';
import type {ExternalLink} from './externalLink';
import type {RecentNotebookLinks} from './recentNotebookLinks';
import {serializeExternalLink} from './serializeExternalLink';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRecentNotebookLinks(recentNotebookLinks: RecentNotebookLinks | undefined = {} as RecentNotebookLinks) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { recentNotebookLinks.odataType = n.getStringValue(); },
        "oneNoteClientUrl": n => { recentNotebookLinks.oneNoteClientUrl = n.getObjectValue<ExternalLink>(createExternalLinkFromDiscriminatorValue); },
        "oneNoteWebUrl": n => { recentNotebookLinks.oneNoteWebUrl = n.getObjectValue<ExternalLink>(createExternalLinkFromDiscriminatorValue); },
    }
}
