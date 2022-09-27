import {WindowsDefenderAdvancedThreatProtectionConfigurationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsDefenderAdvancedThreatProtectionConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsDefenderAdvancedThreatProtectionConfigurationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsDefenderAdvancedThreatProtectionConfigurationCollectionResponse();
}
