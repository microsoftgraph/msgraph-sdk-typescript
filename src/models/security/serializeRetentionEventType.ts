import { type IdentitySet } from '../identitySet';
import { serializeEntity } from '../serializeEntity';
import { serializeIdentitySet } from '../serializeIdentitySet';
import { type RetentionEventType } from './retentionEventType';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeRetentionEventType(writer: SerializationWriter, retentionEventType: RetentionEventType | undefined = {} as RetentionEventType) : void {
        serializeEntity(writer, retentionEventType)
        writer.writeObjectValue<IdentitySet>("createdBy", retentionEventType.createdBy, serializeIdentitySet);
        writer.writeDateValue("createdDateTime", retentionEventType.createdDateTime);
        writer.writeStringValue("description", retentionEventType.description);
        writer.writeStringValue("displayName", retentionEventType.displayName);
        writer.writeObjectValue<IdentitySet>("lastModifiedBy", retentionEventType.lastModifiedBy, serializeIdentitySet);
        writer.writeDateValue("lastModifiedDateTime", retentionEventType.lastModifiedDateTime);
}
