import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {EducationAssignmentGrade} from './educationAssignmentGrade';
import {IdentitySet} from './identitySet';
import {serializeIdentitySet} from './serializeIdentitySet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationAssignmentGrade(educationAssignmentGrade: EducationAssignmentGrade | undefined = {} as EducationAssignmentGrade) : Record<string, (node: ParseNode) => void> {
    return {
        "gradedBy": n => { educationAssignmentGrade.gradedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "gradedDateTime": n => { educationAssignmentGrade.gradedDateTime = n.getDateValue(); },
        "@odata.type": n => { educationAssignmentGrade.odataType = n.getStringValue(); },
    }
}
