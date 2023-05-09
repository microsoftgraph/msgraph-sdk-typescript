import {AppListItem} from './appListItem';
import {createAppListItemFromDiscriminatorValue} from './createAppListItemFromDiscriminatorValue';
import {IosNetworkUsageRule} from './iosNetworkUsageRule';
import {serializeAppListItem} from './serializeAppListItem';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosNetworkUsageRule(iosNetworkUsageRule: IosNetworkUsageRule | undefined = {} as IosNetworkUsageRule) : Record<string, (node: ParseNode) => void> {
    return {
        "cellularDataBlocked": n => { iosNetworkUsageRule.cellularDataBlocked = n.getBooleanValue(); },
        "cellularDataBlockWhenRoaming": n => { iosNetworkUsageRule.cellularDataBlockWhenRoaming = n.getBooleanValue(); },
        "managedApps": n => { iosNetworkUsageRule.managedApps = n.getCollectionOfObjectValues<AppListItem>(createAppListItemFromDiscriminatorValue); },
        "@odata.type": n => { iosNetworkUsageRule.odataType = n.getStringValue(); },
    }
}
