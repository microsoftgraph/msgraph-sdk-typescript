import { deserializeIntoAppConfigurationSettingItem } from './deserializeIntoAppConfigurationSettingItem';
import { type AppConfigurationSettingItem } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAppConfigurationSettingItemFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAppConfigurationSettingItem;
}
