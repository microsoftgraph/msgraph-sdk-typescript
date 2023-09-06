import { type ChangeTrackedEntity } from './changeTrackedEntity';
import { createIdentitySetFromDiscriminatorValue } from './createIdentitySetFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type IdentitySet } from './identitySet';
import { serializeIdentitySet } from './serializeIdentitySet';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoChangeTrackedEntity(changeTrackedEntity: ChangeTrackedEntity | undefined = {} as ChangeTrackedEntity) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(changeTrackedEntity),
        "createdDateTime": n => { changeTrackedEntity.createdDateTime = n.getDateValue(); },
        "lastModifiedBy": n => { changeTrackedEntity.lastModifiedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "lastModifiedDateTime": n => { changeTrackedEntity.lastModifiedDateTime = n.getDateValue(); },
    }
}
