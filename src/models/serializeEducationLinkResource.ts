import {EducationLinkResource} from './educationLinkResource';
import {serializeEducationResource} from './serializeEducationResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationLinkResource(educationLinkResource: EducationLinkResource | undefined = {} as EducationLinkResource, writer: SerializationWriter) : void {
        serializeEducationResource(writer, educationLinkResource)
        writer.writeStringValue("link", educationLinkResource.link);
}
