import {AppCatalogs} from './appCatalogs';
import {serializeEntity} from './serializeEntity';
import {serializeTeamsApp} from './serializeTeamsApp';
import {TeamsApp} from './teamsApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAppCatalogs(writer: SerializationWriter, appCatalogs: AppCatalogs | undefined = {} as AppCatalogs) : void {
        serializeEntity(writer, appCatalogs)
        writer.writeCollectionOfObjectValues<TeamsApp>("teamsApps", appCatalogs.teamsApps, serializeTeamsApp);
}
