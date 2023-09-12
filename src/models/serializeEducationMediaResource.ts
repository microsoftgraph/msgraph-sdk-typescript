import { type EducationMediaResource } from './educationMediaResource';
import { serializeEducationResource } from './serializeEducationResource';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEducationMediaResource(writer: SerializationWriter, educationMediaResource: EducationMediaResource | undefined = {} as EducationMediaResource) : void {
        serializeEducationResource(writer, educationMediaResource)
        writer.writeStringValue("fileUrl", educationMediaResource.fileUrl);
}
