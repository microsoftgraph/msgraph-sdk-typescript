import {ChangeTrackedEntity} from './changeTrackedEntity';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {IdentitySet} from './identitySet';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChangeTrackedEntity(changeTrackedEntity: ChangeTrackedEntity | undefined = {} as ChangeTrackedEntity) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(changeTrackedEntity),
        "createdDateTime": n => { changeTrackedEntity.createdDateTime = n.getDateValue(); },
        "lastModifiedBy": n => { changeTrackedEntity.lastModifiedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "lastModifiedDateTime": n => { changeTrackedEntity.lastModifiedDateTime = n.getDateValue(); },
    }
}
