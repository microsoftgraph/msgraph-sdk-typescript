import {SearchWithQMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSearchWithQMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : SearchWithQMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SearchWithQMember1();
}
