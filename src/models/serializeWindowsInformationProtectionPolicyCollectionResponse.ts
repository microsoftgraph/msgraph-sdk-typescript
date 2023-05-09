import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWindowsInformationProtectionPolicy} from './serializeWindowsInformationProtectionPolicy';
import {WindowsInformationProtectionPolicy} from './windowsInformationProtectionPolicy';
import {WindowsInformationProtectionPolicyCollectionResponse} from './windowsInformationProtectionPolicyCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsInformationProtectionPolicyCollectionResponse(writer: SerializationWriter, windowsInformationProtectionPolicyCollectionResponse: WindowsInformationProtectionPolicyCollectionResponse | undefined = {} as WindowsInformationProtectionPolicyCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, windowsInformationProtectionPolicyCollectionResponse)
        writer.writeCollectionOfObjectValues<WindowsInformationProtectionPolicy>("value", windowsInformationProtectionPolicyCollectionResponse.value, serializeWindowsInformationProtectionPolicy);
}
