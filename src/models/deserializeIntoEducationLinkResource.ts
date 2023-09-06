import { deserializeIntoEducationResource } from './deserializeIntoEducationResource';
import { type EducationLinkResource } from './educationLinkResource';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationLinkResource(educationLinkResource: EducationLinkResource | undefined = {} as EducationLinkResource) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEducationResource(educationLinkResource),
        "link": n => { educationLinkResource.link = n.getStringValue(); },
    }
}
