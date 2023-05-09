import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Shared} from './shared';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoShared(shared: Shared | undefined = {} as Shared) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { shared.odataType = n.getStringValue(); },
        "owner": n => { shared.owner = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "scope": n => { shared.scope = n.getStringValue(); },
        "sharedBy": n => { shared.sharedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "sharedDateTime": n => { shared.sharedDateTime = n.getDateValue(); },
    }
}
