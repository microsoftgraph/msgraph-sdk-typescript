import {deserializeIntoTeamsAppSettings} from './deserializeIntoTeamsAppSettings';
import {TeamsAppSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamsAppSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamsAppSettings;
}
