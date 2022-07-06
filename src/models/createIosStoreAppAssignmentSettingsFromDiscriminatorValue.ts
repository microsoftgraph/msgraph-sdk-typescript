import {IosStoreAppAssignmentSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosStoreAppAssignmentSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosStoreAppAssignmentSettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosStoreAppAssignmentSettings();
}
