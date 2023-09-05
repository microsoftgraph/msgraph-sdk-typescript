import { type UriClickSecurityState } from './uriClickSecurityState';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUriClickSecurityState(writer: SerializationWriter, uriClickSecurityState: UriClickSecurityState | undefined = {} as UriClickSecurityState) : void {
        writer.writeStringValue("clickAction", uriClickSecurityState.clickAction);
        writer.writeDateValue("clickDateTime", uriClickSecurityState.clickDateTime);
        writer.writeStringValue("id", uriClickSecurityState.id);
        writer.writeStringValue("@odata.type", uriClickSecurityState.odataType);
        writer.writeStringValue("sourceId", uriClickSecurityState.sourceId);
        writer.writeStringValue("uriDomain", uriClickSecurityState.uriDomain);
        writer.writeStringValue("verdict", uriClickSecurityState.verdict);
        writer.writeAdditionalData(uriClickSecurityState.additionalData);
}
