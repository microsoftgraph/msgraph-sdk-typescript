import { deserializeIntoEducationResource } from './deserializeIntoEducationResource';
import { type EducationWordResource } from './educationWordResource';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationWordResource(educationWordResource: EducationWordResource | undefined = {} as EducationWordResource) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEducationResource(educationWordResource),
        "fileUrl": n => { educationWordResource.fileUrl = n.getStringValue(); },
    }
}
