import {createWindowsInformationProtectionNetworkLearningSummaryFromDiscriminatorValue} from './createWindowsInformationProtectionNetworkLearningSummaryFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeWindowsInformationProtectionNetworkLearningSummary} from './serializeWindowsInformationProtectionNetworkLearningSummary';
import {WindowsInformationProtectionNetworkLearningSummary} from './windowsInformationProtectionNetworkLearningSummary';
import {WindowsInformationProtectionNetworkLearningSummaryCollectionResponse} from './windowsInformationProtectionNetworkLearningSummaryCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsInformationProtectionNetworkLearningSummaryCollectionResponse(windowsInformationProtectionNetworkLearningSummaryCollectionResponse: WindowsInformationProtectionNetworkLearningSummaryCollectionResponse | undefined = {} as WindowsInformationProtectionNetworkLearningSummaryCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(windowsInformationProtectionNetworkLearningSummaryCollectionResponse),
        "value": n => { windowsInformationProtectionNetworkLearningSummaryCollectionResponse.value = n.getCollectionOfObjectValues<WindowsInformationProtectionNetworkLearningSummary>(createWindowsInformationProtectionNetworkLearningSummaryFromDiscriminatorValue); },
    }
}
