import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {EducationOutcome} from './educationOutcome';
import {IdentitySet} from './identitySet';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationOutcome(educationOutcome: EducationOutcome | undefined = {} as EducationOutcome) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(educationOutcome),
        "lastModifiedBy": n => { educationOutcome.lastModifiedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "lastModifiedDateTime": n => { educationOutcome.lastModifiedDateTime = n.getDateValue(); },
    }
}
