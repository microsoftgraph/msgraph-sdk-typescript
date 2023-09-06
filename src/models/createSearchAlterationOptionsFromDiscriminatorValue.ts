import { deserializeIntoSearchAlterationOptions } from './deserializeIntoSearchAlterationOptions';
import { type SearchAlterationOptions } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSearchAlterationOptionsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSearchAlterationOptions;
}
