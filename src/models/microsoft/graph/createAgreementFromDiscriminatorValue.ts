import {Agreement} from './agreement';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAgreementFromDiscriminatorValue(parseNode: ParseNode | undefined) : Agreement {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Agreement();
}
