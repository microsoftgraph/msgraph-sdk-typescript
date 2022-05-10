import {PersonTypeImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPersonTypeFromDiscriminatorValue(parseNode: ParseNode | undefined) : PersonTypeImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PersonTypeImpl();
}
