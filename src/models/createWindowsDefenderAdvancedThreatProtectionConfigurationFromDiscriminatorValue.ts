import {deserializeIntoWindowsDefenderAdvancedThreatProtectionConfiguration} from './deserializeIntoWindowsDefenderAdvancedThreatProtectionConfiguration';
import {WindowsDefenderAdvancedThreatProtectionConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsDefenderAdvancedThreatProtectionConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsDefenderAdvancedThreatProtectionConfiguration;
}
