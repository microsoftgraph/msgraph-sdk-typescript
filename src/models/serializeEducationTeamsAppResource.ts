import {EducationTeamsAppResource} from './educationTeamsAppResource';
import {serializeEducationResource} from './serializeEducationResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationTeamsAppResource(writer: SerializationWriter, educationTeamsAppResource: EducationTeamsAppResource | undefined = {} as EducationTeamsAppResource) : void {
        serializeEducationResource(writer, educationTeamsAppResource)
        writer.writeStringValue("appIconWebUrl", educationTeamsAppResource.appIconWebUrl);
        writer.writeStringValue("appId", educationTeamsAppResource.appId);
        writer.writeStringValue("teamsEmbeddedContentUrl", educationTeamsAppResource.teamsEmbeddedContentUrl);
        writer.writeStringValue("webUrl", educationTeamsAppResource.webUrl);
}
