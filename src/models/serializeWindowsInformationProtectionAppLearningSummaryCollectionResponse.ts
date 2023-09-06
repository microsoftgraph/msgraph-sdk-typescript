import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeWindowsInformationProtectionAppLearningSummary } from './serializeWindowsInformationProtectionAppLearningSummary';
import { type WindowsInformationProtectionAppLearningSummary } from './windowsInformationProtectionAppLearningSummary';
import { type WindowsInformationProtectionAppLearningSummaryCollectionResponse } from './windowsInformationProtectionAppLearningSummaryCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWindowsInformationProtectionAppLearningSummaryCollectionResponse(writer: SerializationWriter, windowsInformationProtectionAppLearningSummaryCollectionResponse: WindowsInformationProtectionAppLearningSummaryCollectionResponse | undefined = {} as WindowsInformationProtectionAppLearningSummaryCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, windowsInformationProtectionAppLearningSummaryCollectionResponse)
        writer.writeCollectionOfObjectValues<WindowsInformationProtectionAppLearningSummary>("value", windowsInformationProtectionAppLearningSummaryCollectionResponse.value, serializeWindowsInformationProtectionAppLearningSummary);
}
