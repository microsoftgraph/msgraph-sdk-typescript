import {deserializeIntoEducationResource} from './deserializeIntoEducationResource';
import {EducationMediaResource} from './educationMediaResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationMediaResource(educationMediaResource: EducationMediaResource | undefined = {} as EducationMediaResource) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEducationResource(educationMediaResource),
        "fileUrl": n => { educationMediaResource.fileUrl = n.getStringValue(); },
    }
}
