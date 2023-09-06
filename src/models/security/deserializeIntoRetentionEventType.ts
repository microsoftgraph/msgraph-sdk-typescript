import { createIdentitySetFromDiscriminatorValue } from '../createIdentitySetFromDiscriminatorValue';
import { deserializeIntoEntity } from '../deserializeIntoEntity';
import { type IdentitySet } from '../identitySet';
import { serializeIdentitySet } from '../serializeIdentitySet';
import { type RetentionEventType } from './retentionEventType';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoRetentionEventType(retentionEventType: RetentionEventType | undefined = {} as RetentionEventType) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(retentionEventType),
        "createdBy": n => { retentionEventType.createdBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "createdDateTime": n => { retentionEventType.createdDateTime = n.getDateValue(); },
        "description": n => { retentionEventType.description = n.getStringValue(); },
        "displayName": n => { retentionEventType.displayName = n.getStringValue(); },
        "lastModifiedBy": n => { retentionEventType.lastModifiedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "lastModifiedDateTime": n => { retentionEventType.lastModifiedDateTime = n.getDateValue(); },
    }
}
