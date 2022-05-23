import {WindowsInformationProtectionNetworkLearningSummaryImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsInformationProtectionNetworkLearningSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsInformationProtectionNetworkLearningSummaryImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsInformationProtectionNetworkLearningSummaryImpl();
}
