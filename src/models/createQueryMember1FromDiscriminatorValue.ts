import {QueryMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createQueryMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : QueryMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new QueryMember1();
}
