import {deserializeIntoEducationResource} from './deserializeIntoEducationResource';
import {EducationWordResource} from './educationWordResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationWordResource(educationWordResource: EducationWordResource | undefined = {} as EducationWordResource) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEducationResource(educationWordResource),
        "fileUrl": n => { educationWordResource.fileUrl = n.getStringValue(); },
    }
}
