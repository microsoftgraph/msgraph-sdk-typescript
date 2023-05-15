import {deserializeIntoEducationResource} from './deserializeIntoEducationResource';
import {EducationLinkResource} from './educationLinkResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationLinkResource(educationLinkResource: EducationLinkResource | undefined = {} as EducationLinkResource) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEducationResource(educationLinkResource),
        "link": n => { educationLinkResource.link = n.getStringValue(); },
    }
}
