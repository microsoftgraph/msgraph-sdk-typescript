import {deserializeIntoEducationResource} from './deserializeIntoEducationResource';
import {EducationTeamsAppResource} from './educationTeamsAppResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationTeamsAppResource(educationTeamsAppResource: EducationTeamsAppResource | undefined = {} as EducationTeamsAppResource) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEducationResource(educationTeamsAppResource),
        "appIconWebUrl": n => { educationTeamsAppResource.appIconWebUrl = n.getStringValue(); },
        "appId": n => { educationTeamsAppResource.appId = n.getStringValue(); },
        "teamsEmbeddedContentUrl": n => { educationTeamsAppResource.teamsEmbeddedContentUrl = n.getStringValue(); },
        "webUrl": n => { educationTeamsAppResource.webUrl = n.getStringValue(); },
    }
}
