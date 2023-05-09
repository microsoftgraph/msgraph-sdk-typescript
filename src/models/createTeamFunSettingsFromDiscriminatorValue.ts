import {deserializeIntoTeamFunSettings} from './deserializeIntoTeamFunSettings';
import {TeamFunSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamFunSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamFunSettings;
}
