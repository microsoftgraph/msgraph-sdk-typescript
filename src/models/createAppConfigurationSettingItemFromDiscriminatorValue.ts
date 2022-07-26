import {AppConfigurationSettingItem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppConfigurationSettingItemFromDiscriminatorValue(parseNode: ParseNode | undefined) : AppConfigurationSettingItem {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AppConfigurationSettingItem();
}
