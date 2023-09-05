import { type AppListItem } from './appListItem';
import { createAppListItemFromDiscriminatorValue } from './createAppListItemFromDiscriminatorValue';
import { type IosNetworkUsageRule } from './iosNetworkUsageRule';
import { serializeAppListItem } from './serializeAppListItem';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoIosNetworkUsageRule(iosNetworkUsageRule: IosNetworkUsageRule | undefined = {} as IosNetworkUsageRule) : Record<string, (node: ParseNode) => void> {
    return {
        "cellularDataBlocked": n => { iosNetworkUsageRule.cellularDataBlocked = n.getBooleanValue(); },
        "cellularDataBlockWhenRoaming": n => { iosNetworkUsageRule.cellularDataBlockWhenRoaming = n.getBooleanValue(); },
        "managedApps": n => { iosNetworkUsageRule.managedApps = n.getCollectionOfObjectValues<AppListItem>(createAppListItemFromDiscriminatorValue); },
        "@odata.type": n => { iosNetworkUsageRule.odataType = n.getStringValue(); },
    }
}
