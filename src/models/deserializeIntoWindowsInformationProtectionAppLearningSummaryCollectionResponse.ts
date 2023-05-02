import {createWindowsInformationProtectionAppLearningSummaryFromDiscriminatorValue} from './createWindowsInformationProtectionAppLearningSummaryFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeWindowsInformationProtectionAppLearningSummary} from './serializeWindowsInformationProtectionAppLearningSummary';
import {WindowsInformationProtectionAppLearningSummary} from './windowsInformationProtectionAppLearningSummary';
import {WindowsInformationProtectionAppLearningSummaryCollectionResponse} from './windowsInformationProtectionAppLearningSummaryCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsInformationProtectionAppLearningSummaryCollectionResponse(windowsInformationProtectionAppLearningSummaryCollectionResponse: WindowsInformationProtectionAppLearningSummaryCollectionResponse | undefined = {} as WindowsInformationProtectionAppLearningSummaryCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(windowsInformationProtectionAppLearningSummaryCollectionResponse),
        "value": n => { windowsInformationProtectionAppLearningSummaryCollectionResponse.value = n.getCollectionOfObjectValues<WindowsInformationProtectionAppLearningSummary>(createWindowsInformationProtectionAppLearningSummaryFromDiscriminatorValue); },
    }
}
