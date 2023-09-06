import { type EducationExternalResource } from './educationExternalResource';
import { serializeEducationResource } from './serializeEducationResource';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEducationExternalResource(writer: SerializationWriter, educationExternalResource: EducationExternalResource | undefined = {} as EducationExternalResource) : void {
        serializeEducationResource(writer, educationExternalResource)
        writer.writeStringValue("webUrl", educationExternalResource.webUrl);
}
