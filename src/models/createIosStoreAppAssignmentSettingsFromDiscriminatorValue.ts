import {deserializeIntoIosStoreAppAssignmentSettings} from './deserializeIntoIosStoreAppAssignmentSettings';
import {IosStoreAppAssignmentSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosStoreAppAssignmentSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIosStoreAppAssignmentSettings;
}
