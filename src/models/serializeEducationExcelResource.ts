import {EducationExcelResource} from './educationExcelResource';
import {serializeEducationResource} from './serializeEducationResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationExcelResource(educationExcelResource: EducationExcelResource | undefined = {} as EducationExcelResource, writer: SerializationWriter) : void {
        serializeEducationResource(writer, educationExcelResource)
        writer.writeStringValue("fileUrl", educationExcelResource.fileUrl);
}
