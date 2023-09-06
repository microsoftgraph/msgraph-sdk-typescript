import { type IdentitySource } from './identitySource';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentitySource(identitySource: IdentitySource | undefined = {} as IdentitySource) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { identitySource.odataType = n.getStringValue(); },
    }
}
