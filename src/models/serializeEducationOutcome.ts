import { type EducationOutcome } from './educationOutcome';
import { type IdentitySet } from './identitySet';
import { serializeEntity } from './serializeEntity';
import { serializeIdentitySet } from './serializeIdentitySet';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEducationOutcome(writer: SerializationWriter, educationOutcome: EducationOutcome | undefined = {} as EducationOutcome) : void {
        serializeEntity(writer, educationOutcome)
        writer.writeObjectValue<IdentitySet>("lastModifiedBy", educationOutcome.lastModifiedBy, serializeIdentitySet);
        writer.writeDateValue("lastModifiedDateTime", educationOutcome.lastModifiedDateTime);
}
