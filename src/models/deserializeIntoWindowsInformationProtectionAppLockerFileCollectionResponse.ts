import {createWindowsInformationProtectionAppLockerFileFromDiscriminatorValue} from './createWindowsInformationProtectionAppLockerFileFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeWindowsInformationProtectionAppLockerFile} from './serializeWindowsInformationProtectionAppLockerFile';
import {WindowsInformationProtectionAppLockerFile} from './windowsInformationProtectionAppLockerFile';
import {WindowsInformationProtectionAppLockerFileCollectionResponse} from './windowsInformationProtectionAppLockerFileCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsInformationProtectionAppLockerFileCollectionResponse(windowsInformationProtectionAppLockerFileCollectionResponse: WindowsInformationProtectionAppLockerFileCollectionResponse | undefined = {} as WindowsInformationProtectionAppLockerFileCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(windowsInformationProtectionAppLockerFileCollectionResponse),
        "value": n => { windowsInformationProtectionAppLockerFileCollectionResponse.value = n.getCollectionOfObjectValues<WindowsInformationProtectionAppLockerFile>(createWindowsInformationProtectionAppLockerFileFromDiscriminatorValue); },
    }
}
