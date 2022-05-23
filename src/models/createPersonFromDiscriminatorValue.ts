import {PersonImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPersonFromDiscriminatorValue(parseNode: ParseNode | undefined) : PersonImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PersonImpl();
}
