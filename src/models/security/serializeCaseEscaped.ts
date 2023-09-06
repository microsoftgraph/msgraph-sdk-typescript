import { type IdentitySet } from '../identitySet';
import { serializeEntity } from '../serializeEntity';
import { serializeIdentitySet } from '../serializeIdentitySet';
import { type CaseEscaped } from './caseEscaped';
import { CaseStatus } from './caseStatus';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCaseEscaped(writer: SerializationWriter, caseEscaped: CaseEscaped | undefined = {} as CaseEscaped) : void {
        serializeEntity(writer, caseEscaped)
        writer.writeDateValue("createdDateTime", caseEscaped.createdDateTime);
        writer.writeStringValue("description", caseEscaped.description);
        writer.writeStringValue("displayName", caseEscaped.displayName);
        writer.writeObjectValue<IdentitySet>("lastModifiedBy", caseEscaped.lastModifiedBy, serializeIdentitySet);
        writer.writeDateValue("lastModifiedDateTime", caseEscaped.lastModifiedDateTime);
        writer.writeEnumValue<CaseStatus>("status", caseEscaped.status);
}
