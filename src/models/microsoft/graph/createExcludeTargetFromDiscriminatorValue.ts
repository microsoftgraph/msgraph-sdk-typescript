import {ExcludeTarget} from './excludeTarget';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExcludeTargetFromDiscriminatorValue(parseNode: ParseNode | undefined) : ExcludeTarget {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ExcludeTarget();
}
