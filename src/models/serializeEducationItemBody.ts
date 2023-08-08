import {BodyType} from './bodyType';
import type {EducationItemBody} from './educationItemBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationItemBody(writer: SerializationWriter, educationItemBody: EducationItemBody | undefined = {} as EducationItemBody) : void {
        writer.writeStringValue("content", educationItemBody.content);
        writer.writeEnumValue<BodyType>("contentType", educationItemBody.contentType);
        writer.writeStringValue("@odata.type", educationItemBody.odataType);
        writer.writeAdditionalData(educationItemBody.additionalData);
}
