import {deserializeIntoPasswordProfile} from './deserializeIntoPasswordProfile';
import {PasswordProfile} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPasswordProfileFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPasswordProfile;
}
