import { type IdentitySource } from './identitySource';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeIdentitySource(writer: SerializationWriter, identitySource: IdentitySource | undefined = {} as IdentitySource) : void {
        writer.writeStringValue("@odata.type", identitySource.odataType);
        writer.writeAdditionalData(identitySource.additionalData);
}
