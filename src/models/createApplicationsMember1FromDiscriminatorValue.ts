import {ApplicationsMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApplicationsMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : ApplicationsMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ApplicationsMember1();
}
