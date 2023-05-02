import {ChangeTrackedEntity} from './changeTrackedEntity';
import {IdentitySet} from './identitySet';
import {serializeEntity} from './serializeEntity';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChangeTrackedEntity(writer: SerializationWriter, changeTrackedEntity: ChangeTrackedEntity | undefined = {} as ChangeTrackedEntity) : void {
        serializeEntity(writer, changeTrackedEntity)
}
