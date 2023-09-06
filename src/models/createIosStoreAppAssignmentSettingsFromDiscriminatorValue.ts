import { deserializeIntoIosStoreAppAssignmentSettings } from './deserializeIntoIosStoreAppAssignmentSettings';
import { type IosStoreAppAssignmentSettings } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIosStoreAppAssignmentSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIosStoreAppAssignmentSettings;
}
