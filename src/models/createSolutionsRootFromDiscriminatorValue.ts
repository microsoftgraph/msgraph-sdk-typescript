import {deserializeIntoSolutionsRoot} from './deserializeIntoSolutionsRoot';
import {SolutionsRoot} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSolutionsRootFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSolutionsRoot;
}
