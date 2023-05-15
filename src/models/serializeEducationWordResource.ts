import {EducationWordResource} from './educationWordResource';
import {serializeEducationResource} from './serializeEducationResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationWordResource(writer: SerializationWriter, educationWordResource: EducationWordResource | undefined = {} as EducationWordResource) : void {
        serializeEducationResource(writer, educationWordResource)
        writer.writeStringValue("fileUrl", educationWordResource.fileUrl);
}
