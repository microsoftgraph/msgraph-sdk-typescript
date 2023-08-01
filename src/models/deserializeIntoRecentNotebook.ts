import {createRecentNotebookLinksFromDiscriminatorValue} from './createRecentNotebookLinksFromDiscriminatorValue';
import {OnenoteSourceService} from './onenoteSourceService';
import type {RecentNotebook} from './recentNotebook';
import type {RecentNotebookLinks} from './recentNotebookLinks';
import {serializeRecentNotebookLinks} from './serializeRecentNotebookLinks';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRecentNotebook(recentNotebook: RecentNotebook | undefined = {} as RecentNotebook) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { recentNotebook.displayName = n.getStringValue(); },
        "lastAccessedTime": n => { recentNotebook.lastAccessedTime = n.getDateValue(); },
        "links": n => { recentNotebook.links = n.getObjectValue<RecentNotebookLinks>(createRecentNotebookLinksFromDiscriminatorValue); },
        "@odata.type": n => { recentNotebook.odataType = n.getStringValue(); },
        "sourceService": n => { recentNotebook.sourceService = n.getEnumValue<OnenoteSourceService>(OnenoteSourceService); },
    }
}
