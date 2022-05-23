import {ExcludeTargetImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExcludeTargetFromDiscriminatorValue(parseNode: ParseNode | undefined) : ExcludeTargetImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ExcludeTargetImpl();
}
