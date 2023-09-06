import { deserializeIntoEducationResource } from './deserializeIntoEducationResource';
import { type EducationPowerPointResource } from './educationPowerPointResource';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationPowerPointResource(educationPowerPointResource: EducationPowerPointResource | undefined = {} as EducationPowerPointResource) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEducationResource(educationPowerPointResource),
        "fileUrl": n => { educationPowerPointResource.fileUrl = n.getStringValue(); },
    }
}
