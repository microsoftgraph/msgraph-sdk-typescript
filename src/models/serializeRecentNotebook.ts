import { OnenoteSourceService } from './onenoteSourceService';
import { type RecentNotebook } from './recentNotebook';
import { type RecentNotebookLinks } from './recentNotebookLinks';
import { serializeRecentNotebookLinks } from './serializeRecentNotebookLinks';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeRecentNotebook(writer: SerializationWriter, recentNotebook: RecentNotebook | undefined = {} as RecentNotebook) : void {
        writer.writeStringValue("displayName", recentNotebook.displayName);
        writer.writeDateValue("lastAccessedTime", recentNotebook.lastAccessedTime);
        writer.writeObjectValue<RecentNotebookLinks>("links", recentNotebook.links, serializeRecentNotebookLinks);
        writer.writeStringValue("@odata.type", recentNotebook.odataType);
        writer.writeEnumValue<OnenoteSourceService>("sourceService", recentNotebook.sourceService);
        writer.writeAdditionalData(recentNotebook.additionalData);
}
