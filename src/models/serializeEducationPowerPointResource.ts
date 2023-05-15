import {EducationPowerPointResource} from './educationPowerPointResource';
import {serializeEducationResource} from './serializeEducationResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationPowerPointResource(writer: SerializationWriter, educationPowerPointResource: EducationPowerPointResource | undefined = {} as EducationPowerPointResource) : void {
        serializeEducationResource(writer, educationPowerPointResource)
        writer.writeStringValue("fileUrl", educationPowerPointResource.fileUrl);
}
