import {createMdmWindowsInformationProtectionPolicyFromDiscriminatorValue} from './createMdmWindowsInformationProtectionPolicyFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {MdmWindowsInformationProtectionPolicy} from './mdmWindowsInformationProtectionPolicy';
import type {MdmWindowsInformationProtectionPolicyCollectionResponse} from './mdmWindowsInformationProtectionPolicyCollectionResponse';
import {serializeMdmWindowsInformationProtectionPolicy} from './serializeMdmWindowsInformationProtectionPolicy';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMdmWindowsInformationProtectionPolicyCollectionResponse(mdmWindowsInformationProtectionPolicyCollectionResponse: MdmWindowsInformationProtectionPolicyCollectionResponse | undefined = {} as MdmWindowsInformationProtectionPolicyCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(mdmWindowsInformationProtectionPolicyCollectionResponse),
        "value": n => { mdmWindowsInformationProtectionPolicyCollectionResponse.value = n.getCollectionOfObjectValues<MdmWindowsInformationProtectionPolicy>(createMdmWindowsInformationProtectionPolicyFromDiscriminatorValue); },
    }
}
