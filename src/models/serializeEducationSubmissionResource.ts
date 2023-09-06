import { type EducationResource } from './educationResource';
import { type EducationSubmissionResource } from './educationSubmissionResource';
import { serializeEducationResource } from './serializeEducationResource';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEducationSubmissionResource(writer: SerializationWriter, educationSubmissionResource: EducationSubmissionResource | undefined = {} as EducationSubmissionResource) : void {
        serializeEntity(writer, educationSubmissionResource)
        writer.writeStringValue("assignmentResourceUrl", educationSubmissionResource.assignmentResourceUrl);
        writer.writeObjectValue<EducationResource>("resource", educationSubmissionResource.resource, serializeEducationResource);
}
