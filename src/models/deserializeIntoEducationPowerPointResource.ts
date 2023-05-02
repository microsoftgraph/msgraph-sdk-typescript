import {deserializeIntoEducationResource} from './deserializeIntoEducationResource';
import {EducationPowerPointResource} from './educationPowerPointResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationPowerPointResource(educationPowerPointResource: EducationPowerPointResource | undefined = {} as EducationPowerPointResource) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEducationResource(educationPowerPointResource),
        "fileUrl": n => { educationPowerPointResource.fileUrl = n.getStringValue(); },
    }
}
