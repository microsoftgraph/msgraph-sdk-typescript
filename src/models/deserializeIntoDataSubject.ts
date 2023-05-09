import {DataSubject} from './dataSubject';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDataSubject(dataSubject: DataSubject | undefined = {} as DataSubject) : Record<string, (node: ParseNode) => void> {
    return {
        "email": n => { dataSubject.email = n.getStringValue(); },
        "firstName": n => { dataSubject.firstName = n.getStringValue(); },
        "lastName": n => { dataSubject.lastName = n.getStringValue(); },
        "@odata.type": n => { dataSubject.odataType = n.getStringValue(); },
        "residency": n => { dataSubject.residency = n.getStringValue(); },
    }
}
