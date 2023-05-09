import {PersonType} from './personType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPersonType(personType: PersonType | undefined = {} as PersonType) : Record<string, (node: ParseNode) => void> {
    return {
        "class": n => { personType.classEscaped = n.getStringValue(); },
        "@odata.type": n => { personType.odataType = n.getStringValue(); },
        "subclass": n => { personType.subclass = n.getStringValue(); },
    }
}
