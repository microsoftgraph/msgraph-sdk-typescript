import {AppCatalogs} from './appCatalogs';
import {createTeamsAppFromDiscriminatorValue} from './createTeamsAppFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeTeamsApp} from './serializeTeamsApp';
import {TeamsApp} from './teamsApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAppCatalogs(appCatalogs: AppCatalogs | undefined = {} as AppCatalogs) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(appCatalogs),
        "teamsApps": n => { appCatalogs.teamsApps = n.getCollectionOfObjectValues<TeamsApp>(createTeamsAppFromDiscriminatorValue); },
    }
}
