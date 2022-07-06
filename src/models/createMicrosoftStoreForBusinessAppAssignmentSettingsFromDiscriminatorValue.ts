import {MicrosoftStoreForBusinessAppAssignmentSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMicrosoftStoreForBusinessAppAssignmentSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : MicrosoftStoreForBusinessAppAssignmentSettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MicrosoftStoreForBusinessAppAssignmentSettings();
}
