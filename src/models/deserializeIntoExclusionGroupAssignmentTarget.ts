import { deserializeIntoGroupAssignmentTarget } from './deserializeIntoGroupAssignmentTarget';
import { type ExclusionGroupAssignmentTarget } from './exclusionGroupAssignmentTarget';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoExclusionGroupAssignmentTarget(exclusionGroupAssignmentTarget: ExclusionGroupAssignmentTarget | undefined = {} as ExclusionGroupAssignmentTarget) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoGroupAssignmentTarget(exclusionGroupAssignmentTarget),
    }
}
