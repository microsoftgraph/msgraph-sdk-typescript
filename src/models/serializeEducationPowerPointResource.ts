import {EducationPowerPointResource} from './educationPowerPointResource';
import {serializeEducationResource} from './serializeEducationResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationPowerPointResource(educationPowerPointResource: EducationPowerPointResource | undefined = {} as EducationPowerPointResource, writer: SerializationWriter) : void {
        serializeEducationResource(writer, educationPowerPointResource)
        writer.writeStringValue("fileUrl", educationPowerPointResource.fileUrl);
}
