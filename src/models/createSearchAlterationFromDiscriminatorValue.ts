import {SearchAlterationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSearchAlterationFromDiscriminatorValue(parseNode: ParseNode | undefined) : SearchAlterationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SearchAlterationImpl();
}
