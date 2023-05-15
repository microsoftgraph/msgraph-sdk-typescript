import {deserializeIntoExcludeTarget} from './deserializeIntoExcludeTarget';
import {ExcludeTarget} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExcludeTargetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoExcludeTarget;
}
