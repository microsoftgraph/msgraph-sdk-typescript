import {IdentitySource} from './identitySource';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentitySource(identitySource: IdentitySource | undefined = {} as IdentitySource, writer: SerializationWriter) : void {
        writer.writeStringValue("@odata.type", identitySource.odataType);
        writer.writeAdditionalData(identitySource.additionalData);
}
