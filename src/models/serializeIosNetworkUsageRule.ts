import {AppListItem} from './appListItem';
import {IosNetworkUsageRule} from './iosNetworkUsageRule';
import {serializeAppListItem} from './serializeAppListItem';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosNetworkUsageRule(writer: SerializationWriter, iosNetworkUsageRule: IosNetworkUsageRule | undefined = {} as IosNetworkUsageRule) : void {
        writer.writeBooleanValue("cellularDataBlocked", iosNetworkUsageRule.cellularDataBlocked);
        writer.writeBooleanValue("cellularDataBlockWhenRoaming", iosNetworkUsageRule.cellularDataBlockWhenRoaming);
        writer.writeCollectionOfObjectValues<AppListItem>("managedApps", iosNetworkUsageRule.managedApps, serializeAppListItem);
        writer.writeStringValue("@odata.type", iosNetworkUsageRule.odataType);
        writer.writeAdditionalData(iosNetworkUsageRule.additionalData);
}
