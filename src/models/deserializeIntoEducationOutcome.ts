import { createIdentitySetFromDiscriminatorValue } from './createIdentitySetFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type EducationOutcome } from './educationOutcome';
import { type IdentitySet } from './identitySet';
import { serializeIdentitySet } from './serializeIdentitySet';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationOutcome(educationOutcome: EducationOutcome | undefined = {} as EducationOutcome) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(educationOutcome),
        "lastModifiedBy": n => { educationOutcome.lastModifiedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "lastModifiedDateTime": n => { educationOutcome.lastModifiedDateTime = n.getDateValue(); },
    }
}
