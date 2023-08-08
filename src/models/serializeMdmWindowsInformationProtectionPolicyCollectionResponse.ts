import type {MdmWindowsInformationProtectionPolicy} from './mdmWindowsInformationProtectionPolicy';
import type {MdmWindowsInformationProtectionPolicyCollectionResponse} from './mdmWindowsInformationProtectionPolicyCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeMdmWindowsInformationProtectionPolicy} from './serializeMdmWindowsInformationProtectionPolicy';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMdmWindowsInformationProtectionPolicyCollectionResponse(writer: SerializationWriter, mdmWindowsInformationProtectionPolicyCollectionResponse: MdmWindowsInformationProtectionPolicyCollectionResponse | undefined = {} as MdmWindowsInformationProtectionPolicyCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, mdmWindowsInformationProtectionPolicyCollectionResponse)
        writer.writeCollectionOfObjectValues<MdmWindowsInformationProtectionPolicy>("value", mdmWindowsInformationProtectionPolicyCollectionResponse.value, serializeMdmWindowsInformationProtectionPolicy);
}
