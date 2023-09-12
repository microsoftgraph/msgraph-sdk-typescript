import { type ProxiedDomain } from './proxiedDomain';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeProxiedDomain(writer: SerializationWriter, proxiedDomain: ProxiedDomain | undefined = {} as ProxiedDomain) : void {
        writer.writeStringValue("ipAddressOrFQDN", proxiedDomain.ipAddressOrFQDN);
        writer.writeStringValue("@odata.type", proxiedDomain.odataType);
        writer.writeStringValue("proxy", proxiedDomain.proxy);
        writer.writeAdditionalData(proxiedDomain.additionalData);
}
