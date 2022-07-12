import {FilterByCurrentUserWithOnMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFilterByCurrentUserWithOnMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : FilterByCurrentUserWithOnMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FilterByCurrentUserWithOnMember1();
}
