import { deserializeIntoExcludeTarget } from './deserializeIntoExcludeTarget';
import { type ExcludeTarget } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createExcludeTargetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoExcludeTarget;
}
