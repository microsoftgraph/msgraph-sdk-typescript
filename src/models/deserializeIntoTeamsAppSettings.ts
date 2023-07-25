import {deserializeIntoEntity} from './deserializeIntoEntity';
import {TeamsAppSettings} from './teamsAppSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamsAppSettings(teamsAppSettings: TeamsAppSettings | undefined = {} as TeamsAppSettings) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(teamsAppSettings),
        "allowUserRequestsForAppAccess": n => { teamsAppSettings.allowUserRequestsForAppAccess = n.getBooleanValue(); },
    }
}
