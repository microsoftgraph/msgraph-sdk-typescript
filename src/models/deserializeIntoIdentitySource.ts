import {IdentitySource} from './identitySource';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentitySource(identitySource: IdentitySource | undefined = {} as IdentitySource) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { identitySource.odataType = n.getStringValue(); },
    }
}
