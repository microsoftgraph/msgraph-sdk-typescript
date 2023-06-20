import {External} from './external';
import {ExternalConnection} from './externalConnection';
import {serializeExternalConnection} from './serializeExternalConnection';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExternal(external: External | undefined = {} as External, writer: SerializationWriter) : void {
        writer.writeCollectionOfObjectValues<ExternalConnection>("connections", external.connections, serializeExternalConnection);
        writer.writeStringValue("@odata.type", external.odataType);
        writer.writeAdditionalData(external.additionalData);
}
