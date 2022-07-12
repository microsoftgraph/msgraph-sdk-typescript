import {DeltaMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeltaMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : DeltaMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeltaMember1();
}
