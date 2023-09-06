import { type EducationLinkResource } from './educationLinkResource';
import { serializeEducationResource } from './serializeEducationResource';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEducationLinkResource(writer: SerializationWriter, educationLinkResource: EducationLinkResource | undefined = {} as EducationLinkResource) : void {
        serializeEducationResource(writer, educationLinkResource)
        writer.writeStringValue("link", educationLinkResource.link);
}
