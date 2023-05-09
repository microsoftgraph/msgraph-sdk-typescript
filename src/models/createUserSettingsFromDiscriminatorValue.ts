import {deserializeIntoUserSettings} from './deserializeIntoUserSettings';
import {UserSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserSettings;
}
