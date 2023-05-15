import {createWindowsInformationProtectionPolicyFromDiscriminatorValue} from './createWindowsInformationProtectionPolicyFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeWindowsInformationProtectionPolicy} from './serializeWindowsInformationProtectionPolicy';
import {WindowsInformationProtectionPolicy} from './windowsInformationProtectionPolicy';
import {WindowsInformationProtectionPolicyCollectionResponse} from './windowsInformationProtectionPolicyCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsInformationProtectionPolicyCollectionResponse(windowsInformationProtectionPolicyCollectionResponse: WindowsInformationProtectionPolicyCollectionResponse | undefined = {} as WindowsInformationProtectionPolicyCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(windowsInformationProtectionPolicyCollectionResponse),
        "value": n => { windowsInformationProtectionPolicyCollectionResponse.value = n.getCollectionOfObjectValues<WindowsInformationProtectionPolicy>(createWindowsInformationProtectionPolicyFromDiscriminatorValue); },
    }
}
