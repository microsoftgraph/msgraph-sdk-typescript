import {MobileAppAssignmentSettings} from './mobileAppAssignmentSettings';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileAppAssignmentSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : MobileAppAssignmentSettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MobileAppAssignmentSettings();
}
