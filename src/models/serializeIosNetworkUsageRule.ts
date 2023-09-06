import { type AppListItem } from './appListItem';
import { type IosNetworkUsageRule } from './iosNetworkUsageRule';
import { serializeAppListItem } from './serializeAppListItem';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeIosNetworkUsageRule(writer: SerializationWriter, iosNetworkUsageRule: IosNetworkUsageRule | undefined = {} as IosNetworkUsageRule) : void {
        writer.writeBooleanValue("cellularDataBlocked", iosNetworkUsageRule.cellularDataBlocked);
        writer.writeBooleanValue("cellularDataBlockWhenRoaming", iosNetworkUsageRule.cellularDataBlockWhenRoaming);
        writer.writeCollectionOfObjectValues<AppListItem>("managedApps", iosNetworkUsageRule.managedApps, serializeAppListItem);
        writer.writeStringValue("@odata.type", iosNetworkUsageRule.odataType);
        writer.writeAdditionalData(iosNetworkUsageRule.additionalData);
}
