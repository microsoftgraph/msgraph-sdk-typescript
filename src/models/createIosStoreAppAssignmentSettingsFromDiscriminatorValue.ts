import {IosStoreAppAssignmentSettingsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosStoreAppAssignmentSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosStoreAppAssignmentSettingsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosStoreAppAssignmentSettingsImpl();
}
