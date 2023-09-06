import { BodyType } from './bodyType';
import { type EducationItemBody } from './educationItemBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationItemBody(educationItemBody: EducationItemBody | undefined = {} as EducationItemBody) : Record<string, (node: ParseNode) => void> {
    return {
        "content": n => { educationItemBody.content = n.getStringValue(); },
        "contentType": n => { educationItemBody.contentType = n.getEnumValue<BodyType>(BodyType); },
        "@odata.type": n => { educationItemBody.odataType = n.getStringValue(); },
    }
}
