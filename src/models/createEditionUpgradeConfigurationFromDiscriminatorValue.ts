import {deserializeIntoEditionUpgradeConfiguration} from './deserializeIntoEditionUpgradeConfiguration';
import {EditionUpgradeConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEditionUpgradeConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEditionUpgradeConfiguration;
}
