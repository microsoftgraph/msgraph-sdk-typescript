import {InstantiateMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInstantiateMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : InstantiateMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new InstantiateMember1();
}
