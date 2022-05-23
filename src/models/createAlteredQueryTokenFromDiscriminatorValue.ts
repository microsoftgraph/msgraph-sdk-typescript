import {AlteredQueryTokenImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAlteredQueryTokenFromDiscriminatorValue(parseNode: ParseNode | undefined) : AlteredQueryTokenImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AlteredQueryTokenImpl();
}
