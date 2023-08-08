import type {Phone} from './phone';
import {PhoneType} from './phoneType';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPhone(phone: Phone | undefined = {} as Phone) : Record<string, (node: ParseNode) => void> {
    return {
        "language": n => { phone.language = n.getStringValue(); },
        "number": n => { phone.number = n.getStringValue(); },
        "@odata.type": n => { phone.odataType = n.getStringValue(); },
        "region": n => { phone.region = n.getStringValue(); },
        "type": n => { phone.type = n.getEnumValue<PhoneType>(PhoneType); },
    }
}
