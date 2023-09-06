import { deserializeIntoInformationProtection } from './deserializeIntoInformationProtection';
import { type InformationProtection } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createInformationProtectionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoInformationProtection;
}
