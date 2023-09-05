import { type EducationTeamsAppResource } from './educationTeamsAppResource';
import { serializeEducationResource } from './serializeEducationResource';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEducationTeamsAppResource(writer: SerializationWriter, educationTeamsAppResource: EducationTeamsAppResource | undefined = {} as EducationTeamsAppResource) : void {
        serializeEducationResource(writer, educationTeamsAppResource)
        writer.writeStringValue("appIconWebUrl", educationTeamsAppResource.appIconWebUrl);
        writer.writeStringValue("appId", educationTeamsAppResource.appId);
        writer.writeStringValue("teamsEmbeddedContentUrl", educationTeamsAppResource.teamsEmbeddedContentUrl);
        writer.writeStringValue("webUrl", educationTeamsAppResource.webUrl);
}
