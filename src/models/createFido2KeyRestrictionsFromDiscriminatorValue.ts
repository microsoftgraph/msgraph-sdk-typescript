import { deserializeIntoFido2KeyRestrictions } from './deserializeIntoFido2KeyRestrictions';
import { type Fido2KeyRestrictions } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createFido2KeyRestrictionsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFido2KeyRestrictions;
}
