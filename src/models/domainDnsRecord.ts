import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DomainDnsRecord extends Entity, Parsable {
    /**
     * If false, this record must be configured by the customer at the DNS host for Microsoft Online Services to operate correctly with the domain.
     */
    isOptional?: boolean | undefined;
    /**
     * Value used when configuring the name of the DNS record at the DNS host.
     */
    label?: string | undefined;
    /**
     * Indicates what type of DNS record this entity represents.The value can be one of the following: CName, Mx, Srv, Txt.
     */
    recordType?: string | undefined;
    /**
     * Microsoft Online Service or feature that has a dependency on this DNS record.Can be one of the following values: null, Email, Sharepoint, EmailInternalRelayOnly, OfficeCommunicationsOnline, SharePointDefaultDomain, FullRedelegation, SharePointPublic, OrgIdAuthentication, Yammer, Intune.
     */
    supportedService?: string | undefined;
    /**
     * Value to use when configuring the time-to-live (ttl) property of the DNS record at the DNS host. Not nullable.
     */
    ttl?: number | undefined;
}
