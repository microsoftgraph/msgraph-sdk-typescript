import {createIpRangeFromDiscriminatorValue} from './createIpRangeFromDiscriminatorValue';
import {IpRange} from './ipRange';
import {serializeIpRange} from './serializeIpRange';
import {WindowsInformationProtectionIPRangeCollection} from './windowsInformationProtectionIPRangeCollection';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsInformationProtectionIPRangeCollection(windowsInformationProtectionIPRangeCollection: WindowsInformationProtectionIPRangeCollection | undefined = {} as WindowsInformationProtectionIPRangeCollection) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { windowsInformationProtectionIPRangeCollection.displayName = n.getStringValue(); },
        "@odata.type": n => { windowsInformationProtectionIPRangeCollection.odataType = n.getStringValue(); },
        "ranges": n => { windowsInformationProtectionIPRangeCollection.ranges = n.getCollectionOfObjectValues<IpRange>(createIpRangeFromDiscriminatorValue); },
    }
}
