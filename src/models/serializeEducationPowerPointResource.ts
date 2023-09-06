import { type EducationPowerPointResource } from './educationPowerPointResource';
import { serializeEducationResource } from './serializeEducationResource';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEducationPowerPointResource(writer: SerializationWriter, educationPowerPointResource: EducationPowerPointResource | undefined = {} as EducationPowerPointResource) : void {
        serializeEducationResource(writer, educationPowerPointResource)
        writer.writeStringValue("fileUrl", educationPowerPointResource.fileUrl);
}
