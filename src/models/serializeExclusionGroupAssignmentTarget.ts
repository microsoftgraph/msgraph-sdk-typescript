import {ExclusionGroupAssignmentTarget} from './exclusionGroupAssignmentTarget';
import {serializeGroupAssignmentTarget} from './serializeGroupAssignmentTarget';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExclusionGroupAssignmentTarget(exclusionGroupAssignmentTarget: ExclusionGroupAssignmentTarget | undefined = {} as ExclusionGroupAssignmentTarget, writer: SerializationWriter) : void {
        serializeGroupAssignmentTarget(writer, exclusionGroupAssignmentTarget)
}
