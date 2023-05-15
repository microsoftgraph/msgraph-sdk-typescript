import {deserializeIntoWindowsInformationProtectionNetworkLearningSummaryCollectionResponse} from './deserializeIntoWindowsInformationProtectionNetworkLearningSummaryCollectionResponse';
import {WindowsInformationProtectionNetworkLearningSummaryCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsInformationProtectionNetworkLearningSummaryCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsInformationProtectionNetworkLearningSummaryCollectionResponse;
}
