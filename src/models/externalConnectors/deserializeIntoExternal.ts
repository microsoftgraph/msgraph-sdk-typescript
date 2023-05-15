import {createExternalConnectionFromDiscriminatorValue} from './createExternalConnectionFromDiscriminatorValue';
import {External} from './external';
import {ExternalConnection} from './externalConnection';
import {serializeExternalConnection} from './serializeExternalConnection';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoExternal(external: External | undefined = {} as External) : Record<string, (node: ParseNode) => void> {
    return {
        "connections": n => { external.connections = n.getCollectionOfObjectValues<ExternalConnection>(createExternalConnectionFromDiscriminatorValue); },
        "@odata.type": n => { external.odataType = n.getStringValue(); },
    }
}
