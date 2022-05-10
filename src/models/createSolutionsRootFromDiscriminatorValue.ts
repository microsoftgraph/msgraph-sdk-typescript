import {SolutionsRootImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSolutionsRootFromDiscriminatorValue(parseNode: ParseNode | undefined) : SolutionsRootImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SolutionsRootImpl();
}
