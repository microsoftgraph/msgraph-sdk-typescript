import {createEducationResourceFromDiscriminatorValue} from './createEducationResourceFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {EducationAssignmentResource} from './educationAssignmentResource';
import {EducationResource} from './educationResource';
import {serializeEducationResource} from './serializeEducationResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationAssignmentResource(educationAssignmentResource: EducationAssignmentResource | undefined = {} as EducationAssignmentResource) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(educationAssignmentResource),
        "distributeForStudentWork": n => { educationAssignmentResource.distributeForStudentWork = n.getBooleanValue(); },
        "resource": n => { educationAssignmentResource.resource = n.getObjectValue<EducationResource>(createEducationResourceFromDiscriminatorValue); },
    }
}
