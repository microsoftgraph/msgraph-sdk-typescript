import {BodyType} from './bodyType';
import {EducationItemBody} from './educationItemBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationItemBody(educationItemBody: EducationItemBody | undefined = {} as EducationItemBody, writer: SerializationWriter) : void {
        writer.writeStringValue("content", educationItemBody.content);
        writer.writeEnumValue<BodyType>("contentType", educationItemBody.contentType);
        writer.writeStringValue("@odata.type", educationItemBody.odataType);
        writer.writeAdditionalData(educationItemBody.additionalData);
}
