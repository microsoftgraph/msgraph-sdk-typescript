import { createIdentitySetFromDiscriminatorValue } from '../createIdentitySetFromDiscriminatorValue';
import { deserializeIntoEntity } from '../deserializeIntoEntity';
import { type IdentitySet } from '../identitySet';
import { serializeIdentitySet } from '../serializeIdentitySet';
import { type CaseEscaped } from './caseEscaped';
import { CaseStatus } from './caseStatus';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoCaseEscaped(caseEscaped: CaseEscaped | undefined = {} as CaseEscaped) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(caseEscaped),
        "createdDateTime": n => { caseEscaped.createdDateTime = n.getDateValue(); },
        "description": n => { caseEscaped.description = n.getStringValue(); },
        "displayName": n => { caseEscaped.displayName = n.getStringValue(); },
        "lastModifiedBy": n => { caseEscaped.lastModifiedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "lastModifiedDateTime": n => { caseEscaped.lastModifiedDateTime = n.getDateValue(); },
        "status": n => { caseEscaped.status = n.getEnumValue<CaseStatus>(CaseStatus); },
    }
}
