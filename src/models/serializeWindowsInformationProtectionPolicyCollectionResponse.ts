import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeWindowsInformationProtectionPolicy } from './serializeWindowsInformationProtectionPolicy';
import { type WindowsInformationProtectionPolicy } from './windowsInformationProtectionPolicy';
import { type WindowsInformationProtectionPolicyCollectionResponse } from './windowsInformationProtectionPolicyCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWindowsInformationProtectionPolicyCollectionResponse(writer: SerializationWriter, windowsInformationProtectionPolicyCollectionResponse: WindowsInformationProtectionPolicyCollectionResponse | undefined = {} as WindowsInformationProtectionPolicyCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, windowsInformationProtectionPolicyCollectionResponse)
        writer.writeCollectionOfObjectValues<WindowsInformationProtectionPolicy>("value", windowsInformationProtectionPolicyCollectionResponse.value, serializeWindowsInformationProtectionPolicy);
}
