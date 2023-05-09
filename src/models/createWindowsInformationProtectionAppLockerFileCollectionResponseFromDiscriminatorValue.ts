import {deserializeIntoWindowsInformationProtectionAppLockerFileCollectionResponse} from './deserializeIntoWindowsInformationProtectionAppLockerFileCollectionResponse';
import {WindowsInformationProtectionAppLockerFileCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsInformationProtectionAppLockerFileCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsInformationProtectionAppLockerFileCollectionResponse;
}
