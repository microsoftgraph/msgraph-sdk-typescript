import {ProvisionChannelEmailResult} from './provisionChannelEmailResult';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeProvisionChannelEmailResult(writer: SerializationWriter, provisionChannelEmailResult: ProvisionChannelEmailResult | undefined = {} as ProvisionChannelEmailResult) : void {
        writer.writeStringValue("email", provisionChannelEmailResult.email);
        writer.writeStringValue("@odata.type", provisionChannelEmailResult.odataType);
        writer.writeAdditionalData(provisionChannelEmailResult.additionalData);
}
