import {IdentitySet} from '../identitySet';
import {serializeEntity} from '../serializeEntity';
import {serializeIdentitySet} from '../serializeIdentitySet';
import {RetentionEventType} from './retentionEventType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRetentionEventType(writer: SerializationWriter, retentionEventType: RetentionEventType | undefined = {} as RetentionEventType) : void {
        serializeEntity(writer, retentionEventType)
        writer.writeObjectValue<IdentitySet>("createdBy", retentionEventType.createdBy, serializeIdentitySet);
        writer.writeDateValue("createdDateTime", retentionEventType.createdDateTime);
        writer.writeStringValue("description", retentionEventType.description);
        writer.writeStringValue("displayName", retentionEventType.displayName);
        writer.writeObjectValue<IdentitySet>("lastModifiedBy", retentionEventType.lastModifiedBy, serializeIdentitySet);
        writer.writeDateValue("lastModifiedDateTime", retentionEventType.lastModifiedDateTime);
}
