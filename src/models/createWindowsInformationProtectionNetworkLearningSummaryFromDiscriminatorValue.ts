import {deserializeIntoWindowsInformationProtectionNetworkLearningSummary} from './deserializeIntoWindowsInformationProtectionNetworkLearningSummary';
import {WindowsInformationProtectionNetworkLearningSummary} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsInformationProtectionNetworkLearningSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsInformationProtectionNetworkLearningSummary;
}
