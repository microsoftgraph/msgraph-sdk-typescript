import {deserializeIntoWindowsInformationProtectionAppLearningSummaryCollectionResponse} from './deserializeIntoWindowsInformationProtectionAppLearningSummaryCollectionResponse';
import {WindowsInformationProtectionAppLearningSummaryCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsInformationProtectionAppLearningSummaryCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsInformationProtectionAppLearningSummaryCollectionResponse;
}
