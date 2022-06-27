import {MobileAppAssignmentSettingsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileAppAssignmentSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : MobileAppAssignmentSettingsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MobileAppAssignmentSettingsImpl();
}
