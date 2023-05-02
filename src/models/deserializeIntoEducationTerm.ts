import {EducationTerm} from './educationTerm';
import {AdditionalDataHolder, DateOnly, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationTerm(educationTerm: EducationTerm | undefined = {} as EducationTerm) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { educationTerm.displayName = n.getStringValue(); },
        "endDate": n => { educationTerm.endDate = n.getDateOnlyValue(); },
        "externalId": n => { educationTerm.externalId = n.getStringValue(); },
        "@odata.type": n => { educationTerm.odataType = n.getStringValue(); },
        "startDate": n => { educationTerm.startDate = n.getDateOnlyValue(); },
    }
}
