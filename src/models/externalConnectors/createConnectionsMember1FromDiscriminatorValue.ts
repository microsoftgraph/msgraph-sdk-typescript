import {ConnectionsMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConnectionsMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : ConnectionsMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConnectionsMember1();
}
