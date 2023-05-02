import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {createIdentityFromDiscriminatorValue} from './createIdentityFromDiscriminatorValue';
import {ExternalGroup} from './externalGroup';
import {Identity} from './identity';
import {serializeIdentity} from './serializeIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoExternalGroup(externalGroup: ExternalGroup | undefined = {} as ExternalGroup) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(externalGroup),
        "description": n => { externalGroup.description = n.getStringValue(); },
        "displayName": n => { externalGroup.displayName = n.getStringValue(); },
        "members": n => { externalGroup.members = n.getCollectionOfObjectValues<Identity>(createIdentityFromDiscriminatorValue); },
    }
}
