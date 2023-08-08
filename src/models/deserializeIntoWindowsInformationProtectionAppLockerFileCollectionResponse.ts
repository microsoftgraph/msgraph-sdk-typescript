import {createWindowsInformationProtectionAppLockerFileFromDiscriminatorValue} from './createWindowsInformationProtectionAppLockerFileFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeWindowsInformationProtectionAppLockerFile} from './serializeWindowsInformationProtectionAppLockerFile';
import type {WindowsInformationProtectionAppLockerFile} from './windowsInformationProtectionAppLockerFile';
import type {WindowsInformationProtectionAppLockerFileCollectionResponse} from './windowsInformationProtectionAppLockerFileCollectionResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsInformationProtectionAppLockerFileCollectionResponse(windowsInformationProtectionAppLockerFileCollectionResponse: WindowsInformationProtectionAppLockerFileCollectionResponse | undefined = {} as WindowsInformationProtectionAppLockerFileCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(windowsInformationProtectionAppLockerFileCollectionResponse),
        "value": n => { windowsInformationProtectionAppLockerFileCollectionResponse.value = n.getCollectionOfObjectValues<WindowsInformationProtectionAppLockerFile>(createWindowsInformationProtectionAppLockerFileFromDiscriminatorValue); },
    }
}
