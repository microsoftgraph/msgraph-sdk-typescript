import {EducationLinkResource} from './educationLinkResource';
import {serializeEducationResource} from './serializeEducationResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationLinkResource(writer: SerializationWriter, educationLinkResource: EducationLinkResource | undefined = {} as EducationLinkResource) : void {
        serializeEducationResource(writer, educationLinkResource)
        writer.writeStringValue("link", educationLinkResource.link);
}
