import { deserializeIntoEducationResource } from './deserializeIntoEducationResource';
import { type EducationExternalResource } from './educationExternalResource';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationExternalResource(educationExternalResource: EducationExternalResource | undefined = {} as EducationExternalResource) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEducationResource(educationExternalResource),
        "webUrl": n => { educationExternalResource.webUrl = n.getStringValue(); },
    }
}
