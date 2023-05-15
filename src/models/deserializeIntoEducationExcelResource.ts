import {deserializeIntoEducationResource} from './deserializeIntoEducationResource';
import {EducationExcelResource} from './educationExcelResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationExcelResource(educationExcelResource: EducationExcelResource | undefined = {} as EducationExcelResource) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEducationResource(educationExcelResource),
        "fileUrl": n => { educationExcelResource.fileUrl = n.getStringValue(); },
    }
}
