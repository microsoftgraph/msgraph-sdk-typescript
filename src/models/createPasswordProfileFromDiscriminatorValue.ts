import { deserializeIntoPasswordProfile } from './deserializeIntoPasswordProfile';
import { type PasswordProfile } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPasswordProfileFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPasswordProfile;
}
