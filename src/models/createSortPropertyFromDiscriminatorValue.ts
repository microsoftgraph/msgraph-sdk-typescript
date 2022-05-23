import {SortPropertyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSortPropertyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SortPropertyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SortPropertyImpl();
}
