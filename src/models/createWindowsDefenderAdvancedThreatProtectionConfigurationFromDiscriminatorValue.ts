import {WindowsDefenderAdvancedThreatProtectionConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsDefenderAdvancedThreatProtectionConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsDefenderAdvancedThreatProtectionConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsDefenderAdvancedThreatProtectionConfiguration();
}
