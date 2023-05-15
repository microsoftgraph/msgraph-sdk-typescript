import {EducationMediaResource} from './educationMediaResource';
import {serializeEducationResource} from './serializeEducationResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationMediaResource(writer: SerializationWriter, educationMediaResource: EducationMediaResource | undefined = {} as EducationMediaResource) : void {
        serializeEducationResource(writer, educationMediaResource)
        writer.writeStringValue("fileUrl", educationMediaResource.fileUrl);
}
