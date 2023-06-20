import {EducationResource} from './educationResource';
import {EducationSubmissionResource} from './educationSubmissionResource';
import {serializeEducationResource} from './serializeEducationResource';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationSubmissionResource(educationSubmissionResource: EducationSubmissionResource | undefined = {} as EducationSubmissionResource, writer: SerializationWriter) : void {
        serializeEntity(writer, educationSubmissionResource)
        writer.writeStringValue("assignmentResourceUrl", educationSubmissionResource.assignmentResourceUrl);
        writer.writeObjectValue<EducationResource>("resource", educationSubmissionResource.resource, serializeEducationResource);
}
