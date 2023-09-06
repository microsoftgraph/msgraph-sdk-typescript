import { type IpRange } from './ipRange';
import { serializeIpRange } from './serializeIpRange';
import { type WindowsInformationProtectionIPRangeCollection } from './windowsInformationProtectionIPRangeCollection';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWindowsInformationProtectionIPRangeCollection(writer: SerializationWriter, windowsInformationProtectionIPRangeCollection: WindowsInformationProtectionIPRangeCollection | undefined = {} as WindowsInformationProtectionIPRangeCollection) : void {
        writer.writeStringValue("displayName", windowsInformationProtectionIPRangeCollection.displayName);
        writer.writeStringValue("@odata.type", windowsInformationProtectionIPRangeCollection.odataType);
        writer.writeCollectionOfObjectValues<IpRange>("ranges", windowsInformationProtectionIPRangeCollection.ranges, serializeIpRange);
        writer.writeAdditionalData(windowsInformationProtectionIPRangeCollection.additionalData);
}
