import { deserializeIntoWindowsInformationProtectionAppLearningSummaryCollectionResponse } from './deserializeIntoWindowsInformationProtectionAppLearningSummaryCollectionResponse';
import { type WindowsInformationProtectionAppLearningSummaryCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWindowsInformationProtectionAppLearningSummaryCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsInformationProtectionAppLearningSummaryCollectionResponse;
}
