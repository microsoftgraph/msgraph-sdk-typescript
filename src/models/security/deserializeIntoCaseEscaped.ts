import {createIdentitySetFromDiscriminatorValue} from '../createIdentitySetFromDiscriminatorValue';
import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {IdentitySet} from '../identitySet';
import {serializeIdentitySet} from '../serializeIdentitySet';
import {CaseEscaped} from './caseEscaped';
import {CaseStatus} from './caseStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

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
