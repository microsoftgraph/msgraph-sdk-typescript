import {SearchAlterationOptionsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSearchAlterationOptionsFromDiscriminatorValue(parseNode: ParseNode | undefined) : SearchAlterationOptionsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SearchAlterationOptionsImpl();
}
