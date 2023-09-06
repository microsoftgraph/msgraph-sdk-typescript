import { deserializeIntoTeamFunSettings } from './deserializeIntoTeamFunSettings';
import { type TeamFunSettings } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTeamFunSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamFunSettings;
}
