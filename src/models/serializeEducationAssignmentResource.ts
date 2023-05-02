import {EducationAssignmentResource} from './educationAssignmentResource';
import {EducationResource} from './educationResource';
import {serializeEducationResource} from './serializeEducationResource';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationAssignmentResource(writer: SerializationWriter, educationAssignmentResource: EducationAssignmentResource | undefined = {} as EducationAssignmentResource) : void {
        serializeEntity(writer, educationAssignmentResource)
        writer.writeBooleanValue("distributeForStudentWork", educationAssignmentResource.distributeForStudentWork);
        writer.writeObjectValue<EducationResource>("resource", educationAssignmentResource.resource, serializeEducationResource);
}
