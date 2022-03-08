import {WindowsInformationProtectionAppLearningSummary} from './windowsInformationProtectionAppLearningSummary';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsInformationProtectionAppLearningSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsInformationProtectionAppLearningSummary {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsInformationProtectionAppLearningSummary();
}
