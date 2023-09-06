import { deserializeIntoRegistrationEnforcement } from './deserializeIntoRegistrationEnforcement';
import { type RegistrationEnforcement } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRegistrationEnforcementFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRegistrationEnforcement;
}
