import {createIdentityFromDiscriminatorValue} from './createIdentityFromDiscriminatorValue';
import {Identity} from './identity';
import {IdentitySet} from './identitySet';
import {serializeIdentity} from './serializeIdentity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentitySet(identitySet: IdentitySet | undefined = {} as IdentitySet) : Record<string, (node: ParseNode) => void> {
    return {
        "application": n => { identitySet.application = n.getObjectValue<Identity>(createIdentityFromDiscriminatorValue); },
        "device": n => { identitySet.device = n.getObjectValue<Identity>(createIdentityFromDiscriminatorValue); },
        "@odata.type": n => { identitySet.odataType = n.getStringValue(); },
        "user": n => { identitySet.user = n.getObjectValue<Identity>(createIdentityFromDiscriminatorValue); },
    }
}
