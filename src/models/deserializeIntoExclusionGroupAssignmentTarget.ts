import {deserializeIntoGroupAssignmentTarget} from './deserializeIntoGroupAssignmentTarget';
import {ExclusionGroupAssignmentTarget} from './exclusionGroupAssignmentTarget';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoExclusionGroupAssignmentTarget(exclusionGroupAssignmentTarget: ExclusionGroupAssignmentTarget | undefined = {} as ExclusionGroupAssignmentTarget) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoGroupAssignmentTarget(exclusionGroupAssignmentTarget),
    }
}
