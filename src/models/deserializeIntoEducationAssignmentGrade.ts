import { createIdentitySetFromDiscriminatorValue } from './createIdentitySetFromDiscriminatorValue';
import { type EducationAssignmentGrade } from './educationAssignmentGrade';
import { type IdentitySet } from './identitySet';
import { serializeIdentitySet } from './serializeIdentitySet';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationAssignmentGrade(educationAssignmentGrade: EducationAssignmentGrade | undefined = {} as EducationAssignmentGrade) : Record<string, (node: ParseNode) => void> {
    return {
        "gradedBy": n => { educationAssignmentGrade.gradedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "gradedDateTime": n => { educationAssignmentGrade.gradedDateTime = n.getDateValue(); },
        "@odata.type": n => { educationAssignmentGrade.odataType = n.getStringValue(); },
    }
}
