import {EducationExcelResource} from './educationExcelResource';
import {serializeEducationResource} from './serializeEducationResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationExcelResource(writer: SerializationWriter, educationExcelResource: EducationExcelResource | undefined = {} as EducationExcelResource) : void {
        serializeEducationResource(writer, educationExcelResource)
        writer.writeStringValue("fileUrl", educationExcelResource.fileUrl);
}
