import type {EducationTerm} from './educationTerm';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {DateOnly} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationTerm(educationTerm: EducationTerm | undefined = {} as EducationTerm) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { educationTerm.displayName = n.getStringValue(); },
        "endDate": n => { educationTerm.endDate = n.getDateOnlyValue(); },
        "externalId": n => { educationTerm.externalId = n.getStringValue(); },
        "@odata.type": n => { educationTerm.odataType = n.getStringValue(); },
        "startDate": n => { educationTerm.startDate = n.getDateOnlyValue(); },
    }
}
