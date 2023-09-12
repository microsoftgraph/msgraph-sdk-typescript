import { deserializeIntoEducationResource } from './deserializeIntoEducationResource';
import { type EducationFileResource } from './educationFileResource';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationFileResource(educationFileResource: EducationFileResource | undefined = {} as EducationFileResource) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEducationResource(educationFileResource),
        "fileUrl": n => { educationFileResource.fileUrl = n.getStringValue(); },
    }
}
