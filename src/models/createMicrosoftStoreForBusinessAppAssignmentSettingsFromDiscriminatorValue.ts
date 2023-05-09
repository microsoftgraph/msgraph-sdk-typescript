import {deserializeIntoMicrosoftStoreForBusinessAppAssignmentSettings} from './deserializeIntoMicrosoftStoreForBusinessAppAssignmentSettings';
import {MicrosoftStoreForBusinessAppAssignmentSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMicrosoftStoreForBusinessAppAssignmentSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMicrosoftStoreForBusinessAppAssignmentSettings;
}
