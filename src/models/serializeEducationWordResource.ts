import { type EducationWordResource } from './educationWordResource';
import { serializeEducationResource } from './serializeEducationResource';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEducationWordResource(writer: SerializationWriter, educationWordResource: EducationWordResource | undefined = {} as EducationWordResource) : void {
        serializeEducationResource(writer, educationWordResource)
        writer.writeStringValue("fileUrl", educationWordResource.fileUrl);
}
