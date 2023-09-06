import { deserializeIntoWindowsInformationProtectionNetworkLearningSummary } from './deserializeIntoWindowsInformationProtectionNetworkLearningSummary';
import { type WindowsInformationProtectionNetworkLearningSummary } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWindowsInformationProtectionNetworkLearningSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsInformationProtectionNetworkLearningSummary;
}
