import { deserializeIntoSolutionsRoot } from './deserializeIntoSolutionsRoot';
import { type SolutionsRoot } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSolutionsRootFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSolutionsRoot;
}
