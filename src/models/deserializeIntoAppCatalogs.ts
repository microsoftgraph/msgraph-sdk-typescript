import { type AppCatalogs } from './appCatalogs';
import { createTeamsAppFromDiscriminatorValue } from './createTeamsAppFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { serializeTeamsApp } from './serializeTeamsApp';
import { type TeamsApp } from './teamsApp';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAppCatalogs(appCatalogs: AppCatalogs | undefined = {} as AppCatalogs) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(appCatalogs),
        "teamsApps": n => { appCatalogs.teamsApps = n.getCollectionOfObjectValues<TeamsApp>(createTeamsAppFromDiscriminatorValue); },
    }
}
