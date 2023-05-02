import {BodyType} from './bodyType';
import {EducationItemBody} from './educationItemBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationItemBody(educationItemBody: EducationItemBody | undefined = {} as EducationItemBody) : Record<string, (node: ParseNode) => void> {
    return {
        "content": n => { educationItemBody.content = n.getStringValue(); },
        "contentType": n => { educationItemBody.contentType = n.getEnumValue<BodyType>(BodyType); },
        "@odata.type": n => { educationItemBody.odataType = n.getStringValue(); },
    }
}
