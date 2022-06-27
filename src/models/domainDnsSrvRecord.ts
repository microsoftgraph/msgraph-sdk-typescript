import {DomainDnsRecord} from './domainDnsRecord';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DomainDnsSrvRecord extends Partial<AdditionalDataHolder>, DomainDnsRecord, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Value to use when configuring the Target property of the SRV record at the DNS host. */
    nameTarget?: string | undefined;
    /** Value to use when configuring the port property of the SRV record at the DNS host. */
    port?: number | undefined;
    /** Value to use when configuring the priority property of the SRV record at the DNS host. */
    priority?: number | undefined;
    /** Value to use when configuring the protocol property of the SRV record at the DNS host. */
    protocol?: string | undefined;
    /** Value to use when configuring the service property of the SRV record at the DNS host. */
    service?: string | undefined;
    /** Value to use when configuring the weight property of the SRV record at the DNS host. */
    weight?: number | undefined;
}
