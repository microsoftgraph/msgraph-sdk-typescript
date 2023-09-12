import { deserializeIntoTeamsAppSettings } from './deserializeIntoTeamsAppSettings';
import { type TeamsAppSettings } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTeamsAppSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamsAppSettings;
}
