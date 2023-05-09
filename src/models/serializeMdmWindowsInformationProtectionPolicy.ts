import {MdmWindowsInformationProtectionPolicy} from './mdmWindowsInformationProtectionPolicy';
import {serializeWindowsInformationProtection} from './serializeWindowsInformationProtection';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMdmWindowsInformationProtectionPolicy(writer: SerializationWriter, mdmWindowsInformationProtectionPolicy: MdmWindowsInformationProtectionPolicy | undefined = {} as MdmWindowsInformationProtectionPolicy) : void {
        serializeWindowsInformationProtection(writer, mdmWindowsInformationProtectionPolicy)
}
