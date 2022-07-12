import {DeltaWithTokenMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeltaWithTokenMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : DeltaWithTokenMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeltaWithTokenMember1();
}
