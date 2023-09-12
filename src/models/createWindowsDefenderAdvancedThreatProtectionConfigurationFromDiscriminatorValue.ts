import { deserializeIntoWindowsDefenderAdvancedThreatProtectionConfiguration } from './deserializeIntoWindowsDefenderAdvancedThreatProtectionConfiguration';
import { type WindowsDefenderAdvancedThreatProtectionConfiguration } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWindowsDefenderAdvancedThreatProtectionConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsDefenderAdvancedThreatProtectionConfiguration;
}
