import {EducationFileResource} from './educationFileResource';
import {serializeEducationResource} from './serializeEducationResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationFileResource(educationFileResource: EducationFileResource | undefined = {} as EducationFileResource, writer: SerializationWriter) : void {
        serializeEducationResource(writer, educationFileResource)
        writer.writeStringValue("fileUrl", educationFileResource.fileUrl);
}
