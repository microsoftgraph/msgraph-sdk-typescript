import { createEducationResourceFromDiscriminatorValue } from './createEducationResourceFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type EducationResource } from './educationResource';
import { type EducationSubmissionResource } from './educationSubmissionResource';
import { serializeEducationResource } from './serializeEducationResource';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationSubmissionResource(educationSubmissionResource: EducationSubmissionResource | undefined = {} as EducationSubmissionResource) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(educationSubmissionResource),
        "assignmentResourceUrl": n => { educationSubmissionResource.assignmentResourceUrl = n.getStringValue(); },
        "resource": n => { educationSubmissionResource.resource = n.getObjectValue<EducationResource>(createEducationResourceFromDiscriminatorValue); },
    }
}
