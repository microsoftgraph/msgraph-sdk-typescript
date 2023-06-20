import {EducationTeamsAppResource} from './educationTeamsAppResource';
import {serializeEducationResource} from './serializeEducationResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationTeamsAppResource(educationTeamsAppResource: EducationTeamsAppResource | undefined = {} as EducationTeamsAppResource, writer: SerializationWriter) : void {
        serializeEducationResource(writer, educationTeamsAppResource)
        writer.writeStringValue("appIconWebUrl", educationTeamsAppResource.appIconWebUrl);
        writer.writeStringValue("appId", educationTeamsAppResource.appId);
        writer.writeStringValue("teamsEmbeddedContentUrl", educationTeamsAppResource.teamsEmbeddedContentUrl);
        writer.writeStringValue("webUrl", educationTeamsAppResource.webUrl);
}
