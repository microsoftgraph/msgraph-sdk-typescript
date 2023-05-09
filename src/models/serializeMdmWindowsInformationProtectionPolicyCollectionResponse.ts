import {MdmWindowsInformationProtectionPolicy} from './mdmWindowsInformationProtectionPolicy';
import {MdmWindowsInformationProtectionPolicyCollectionResponse} from './mdmWindowsInformationProtectionPolicyCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeMdmWindowsInformationProtectionPolicy} from './serializeMdmWindowsInformationProtectionPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMdmWindowsInformationProtectionPolicyCollectionResponse(writer: SerializationWriter, mdmWindowsInformationProtectionPolicyCollectionResponse: MdmWindowsInformationProtectionPolicyCollectionResponse | undefined = {} as MdmWindowsInformationProtectionPolicyCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, mdmWindowsInformationProtectionPolicyCollectionResponse)
        writer.writeCollectionOfObjectValues<MdmWindowsInformationProtectionPolicy>("value", mdmWindowsInformationProtectionPolicyCollectionResponse.value, serializeMdmWindowsInformationProtectionPolicy);
}
