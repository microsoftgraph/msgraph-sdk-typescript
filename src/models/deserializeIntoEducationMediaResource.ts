import { deserializeIntoEducationResource } from './deserializeIntoEducationResource';
import { type EducationMediaResource } from './educationMediaResource';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationMediaResource(educationMediaResource: EducationMediaResource | undefined = {} as EducationMediaResource) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEducationResource(educationMediaResource),
        "fileUrl": n => { educationMediaResource.fileUrl = n.getStringValue(); },
    }
}
