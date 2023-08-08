import {deserializeIntoEducationResource} from './deserializeIntoEducationResource';
import type {EducationExcelResource} from './educationExcelResource';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationExcelResource(educationExcelResource: EducationExcelResource | undefined = {} as EducationExcelResource) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEducationResource(educationExcelResource),
        "fileUrl": n => { educationExcelResource.fileUrl = n.getStringValue(); },
    }
}
