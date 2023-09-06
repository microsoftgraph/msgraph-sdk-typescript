import { deserializeIntoWindowsInformationProtectionAppLearningSummary } from './deserializeIntoWindowsInformationProtectionAppLearningSummary';
import { type WindowsInformationProtectionAppLearningSummary } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWindowsInformationProtectionAppLearningSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsInformationProtectionAppLearningSummary;
}
