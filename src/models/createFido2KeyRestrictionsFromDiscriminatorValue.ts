import {Fido2KeyRestrictions} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFido2KeyRestrictionsFromDiscriminatorValue(parseNode: ParseNode | undefined) : Fido2KeyRestrictions {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Fido2KeyRestrictions();
}
