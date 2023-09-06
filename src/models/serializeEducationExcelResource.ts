import { type EducationExcelResource } from './educationExcelResource';
import { serializeEducationResource } from './serializeEducationResource';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEducationExcelResource(writer: SerializationWriter, educationExcelResource: EducationExcelResource | undefined = {} as EducationExcelResource) : void {
        serializeEducationResource(writer, educationExcelResource)
        writer.writeStringValue("fileUrl", educationExcelResource.fileUrl);
}
