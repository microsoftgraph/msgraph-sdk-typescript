import { type AppCatalogs } from './appCatalogs';
import { serializeEntity } from './serializeEntity';
import { serializeTeamsApp } from './serializeTeamsApp';
import { type TeamsApp } from './teamsApp';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAppCatalogs(writer: SerializationWriter, appCatalogs: AppCatalogs | undefined = {} as AppCatalogs) : void {
        serializeEntity(writer, appCatalogs)
        writer.writeCollectionOfObjectValues<TeamsApp>("teamsApps", appCatalogs.teamsApps, serializeTeamsApp);
}
