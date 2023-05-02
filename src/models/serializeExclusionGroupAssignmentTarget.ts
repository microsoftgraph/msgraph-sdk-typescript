import {ExclusionGroupAssignmentTarget} from './exclusionGroupAssignmentTarget';
import {serializeGroupAssignmentTarget} from './serializeGroupAssignmentTarget';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExclusionGroupAssignmentTarget(writer: SerializationWriter, exclusionGroupAssignmentTarget: ExclusionGroupAssignmentTarget | undefined = {} as ExclusionGroupAssignmentTarget) : void {
        serializeGroupAssignmentTarget(writer, exclusionGroupAssignmentTarget)
}
