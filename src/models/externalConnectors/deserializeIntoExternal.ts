import { createExternalConnectionFromDiscriminatorValue } from './createExternalConnectionFromDiscriminatorValue';
import { type External } from './external';
import { type ExternalConnection } from './externalConnection';
import { serializeExternalConnection } from './serializeExternalConnection';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoExternal(external: External | undefined = {} as External) : Record<string, (node: ParseNode) => void> {
    return {
        "connections": n => { external.connections = n.getCollectionOfObjectValues<ExternalConnection>(createExternalConnectionFromDiscriminatorValue); },
        "@odata.type": n => { external.odataType = n.getStringValue(); },
    }
}
