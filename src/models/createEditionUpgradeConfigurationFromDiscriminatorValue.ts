import {EditionUpgradeConfigurationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEditionUpgradeConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : EditionUpgradeConfigurationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EditionUpgradeConfigurationImpl();
}
