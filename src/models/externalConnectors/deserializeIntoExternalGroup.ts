import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {createIdentityFromDiscriminatorValue} from './createIdentityFromDiscriminatorValue';
import type {ExternalGroup} from './externalGroup';
import type {Identity} from './identity';
import {serializeIdentity} from './serializeIdentity';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoExternalGroup(externalGroup: ExternalGroup | undefined = {} as ExternalGroup) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(externalGroup),
        "description": n => { externalGroup.description = n.getStringValue(); },
        "displayName": n => { externalGroup.displayName = n.getStringValue(); },
        "members": n => { externalGroup.members = n.getCollectionOfObjectValues<Identity>(createIdentityFromDiscriminatorValue); },
    }
}
