import { deserializeIntoWindowsInformationProtection } from './deserializeIntoWindowsInformationProtection';
import { type MdmWindowsInformationProtectionPolicy } from './mdmWindowsInformationProtectionPolicy';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoMdmWindowsInformationProtectionPolicy(mdmWindowsInformationProtectionPolicy: MdmWindowsInformationProtectionPolicy | undefined = {} as MdmWindowsInformationProtectionPolicy) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoWindowsInformationProtection(mdmWindowsInformationProtectionPolicy),
    }
}
