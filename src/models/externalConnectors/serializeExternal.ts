import { type External } from './external';
import { type ExternalConnection } from './externalConnection';
import { serializeExternalConnection } from './serializeExternalConnection';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeExternal(writer: SerializationWriter, external: External | undefined = {} as External) : void {
        writer.writeCollectionOfObjectValues<ExternalConnection>("connections", external.connections, serializeExternalConnection);
        writer.writeStringValue("@odata.type", external.odataType);
        writer.writeAdditionalData(external.additionalData);
}
