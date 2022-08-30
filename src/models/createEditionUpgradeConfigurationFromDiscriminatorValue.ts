import {EditionUpgradeConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEditionUpgradeConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : EditionUpgradeConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EditionUpgradeConfiguration();
}
