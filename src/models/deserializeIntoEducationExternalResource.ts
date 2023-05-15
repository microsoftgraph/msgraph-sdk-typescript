import {deserializeIntoEducationResource} from './deserializeIntoEducationResource';
import {EducationExternalResource} from './educationExternalResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationExternalResource(educationExternalResource: EducationExternalResource | undefined = {} as EducationExternalResource) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEducationResource(educationExternalResource),
        "webUrl": n => { educationExternalResource.webUrl = n.getStringValue(); },
    }
}
