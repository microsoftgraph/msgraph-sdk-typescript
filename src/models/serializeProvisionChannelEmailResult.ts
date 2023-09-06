import { type ProvisionChannelEmailResult } from './provisionChannelEmailResult';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeProvisionChannelEmailResult(writer: SerializationWriter, provisionChannelEmailResult: ProvisionChannelEmailResult | undefined = {} as ProvisionChannelEmailResult) : void {
        writer.writeStringValue("email", provisionChannelEmailResult.email);
        writer.writeStringValue("@odata.type", provisionChannelEmailResult.odataType);
        writer.writeAdditionalData(provisionChannelEmailResult.additionalData);
}
