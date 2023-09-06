import { deserializeIntoMicrosoftStoreForBusinessAppAssignmentSettings } from './deserializeIntoMicrosoftStoreForBusinessAppAssignmentSettings';
import { type MicrosoftStoreForBusinessAppAssignmentSettings } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMicrosoftStoreForBusinessAppAssignmentSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMicrosoftStoreForBusinessAppAssignmentSettings;
}
