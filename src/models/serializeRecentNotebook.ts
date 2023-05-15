import {OnenoteSourceService} from './onenoteSourceService';
import {RecentNotebook} from './recentNotebook';
import {RecentNotebookLinks} from './recentNotebookLinks';
import {serializeRecentNotebookLinks} from './serializeRecentNotebookLinks';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRecentNotebook(writer: SerializationWriter, recentNotebook: RecentNotebook | undefined = {} as RecentNotebook) : void {
        writer.writeStringValue("displayName", recentNotebook.displayName);
        writer.writeDateValue("lastAccessedTime", recentNotebook.lastAccessedTime);
        writer.writeObjectValue<RecentNotebookLinks>("links", recentNotebook.links, serializeRecentNotebookLinks);
        writer.writeStringValue("@odata.type", recentNotebook.odataType);
        writer.writeEnumValue<OnenoteSourceService>("sourceService", recentNotebook.sourceService);
        writer.writeAdditionalData(recentNotebook.additionalData);
}
