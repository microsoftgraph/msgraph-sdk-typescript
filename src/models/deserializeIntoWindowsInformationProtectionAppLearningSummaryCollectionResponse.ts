import { createWindowsInformationProtectionAppLearningSummaryFromDiscriminatorValue } from './createWindowsInformationProtectionAppLearningSummaryFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeWindowsInformationProtectionAppLearningSummary } from './serializeWindowsInformationProtectionAppLearningSummary';
import { type WindowsInformationProtectionAppLearningSummary } from './windowsInformationProtectionAppLearningSummary';
import { type WindowsInformationProtectionAppLearningSummaryCollectionResponse } from './windowsInformationProtectionAppLearningSummaryCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsInformationProtectionAppLearningSummaryCollectionResponse(windowsInformationProtectionAppLearningSummaryCollectionResponse: WindowsInformationProtectionAppLearningSummaryCollectionResponse | undefined = {} as WindowsInformationProtectionAppLearningSummaryCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(windowsInformationProtectionAppLearningSummaryCollectionResponse),
        "value": n => { windowsInformationProtectionAppLearningSummaryCollectionResponse.value = n.getCollectionOfObjectValues<WindowsInformationProtectionAppLearningSummary>(createWindowsInformationProtectionAppLearningSummaryFromDiscriminatorValue); },
    }
}
