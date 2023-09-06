import { type EducationFileResource } from './educationFileResource';
import { serializeEducationResource } from './serializeEducationResource';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEducationFileResource(writer: SerializationWriter, educationFileResource: EducationFileResource | undefined = {} as EducationFileResource) : void {
        serializeEducationResource(writer, educationFileResource)
        writer.writeStringValue("fileUrl", educationFileResource.fileUrl);
}
