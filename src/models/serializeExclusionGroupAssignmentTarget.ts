import { type ExclusionGroupAssignmentTarget } from './exclusionGroupAssignmentTarget';
import { serializeGroupAssignmentTarget } from './serializeGroupAssignmentTarget';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeExclusionGroupAssignmentTarget(writer: SerializationWriter, exclusionGroupAssignmentTarget: ExclusionGroupAssignmentTarget | undefined = {} as ExclusionGroupAssignmentTarget) : void {
        serializeGroupAssignmentTarget(writer, exclusionGroupAssignmentTarget)
}
