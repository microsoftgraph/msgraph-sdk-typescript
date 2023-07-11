import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface HostSecurityState extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Host FQDN (Fully Qualified Domain Name) (for example, machine.company.com).
     */
    fqdn?: string | undefined;
    /**
     * The isAzureAdJoined property
     */
    isAzureAdJoined?: boolean | undefined;
    /**
     * The isAzureAdRegistered property
     */
    isAzureAdRegistered?: boolean | undefined;
    /**
     * True if the host is domain joined to an on-premises Active Directory domain.
     */
    isHybridAzureDomainJoined?: boolean | undefined;
    /**
     * The local host name, without the DNS domain name.
     */
    netBiosName?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Host Operating System. (For example, Windows10, MacOS, RHEL, etc.).
     */
    os?: string | undefined;
    /**
     * Private (not routable) IPv4 or IPv6 address (see RFC 1918) at the time of the alert.
     */
    privateIpAddress?: string | undefined;
    /**
     * Publicly routable IPv4 or IPv6 address (see RFC 1918) at time of the alert.
     */
    publicIpAddress?: string | undefined;
    /**
     * Provider-generated/calculated risk score of the host.  Recommended value range of 0-1, which equates to a percentage.
     */
    riskScore?: string | undefined;
}
