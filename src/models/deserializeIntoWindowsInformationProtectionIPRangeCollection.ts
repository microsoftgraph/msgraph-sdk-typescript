import { createIpRangeFromDiscriminatorValue } from './createIpRangeFromDiscriminatorValue';
import { type IpRange } from './ipRange';
import { serializeIpRange } from './serializeIpRange';
import { type WindowsInformationProtectionIPRangeCollection } from './windowsInformationProtectionIPRangeCollection';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsInformationProtectionIPRangeCollection(windowsInformationProtectionIPRangeCollection: WindowsInformationProtectionIPRangeCollection | undefined = {} as WindowsInformationProtectionIPRangeCollection) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { windowsInformationProtectionIPRangeCollection.displayName = n.getStringValue(); },
        "@odata.type": n => { windowsInformationProtectionIPRangeCollection.odataType = n.getStringValue(); },
        "ranges": n => { windowsInformationProtectionIPRangeCollection.ranges = n.getCollectionOfObjectValues<IpRange>(createIpRangeFromDiscriminatorValue); },
    }
}
