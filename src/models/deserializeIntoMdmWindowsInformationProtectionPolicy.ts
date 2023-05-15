import {deserializeIntoWindowsInformationProtection} from './deserializeIntoWindowsInformationProtection';
import {MdmWindowsInformationProtectionPolicy} from './mdmWindowsInformationProtectionPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMdmWindowsInformationProtectionPolicy(mdmWindowsInformationProtectionPolicy: MdmWindowsInformationProtectionPolicy | undefined = {} as MdmWindowsInformationProtectionPolicy) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoWindowsInformationProtection(mdmWindowsInformationProtectionPolicy),
    }
}
