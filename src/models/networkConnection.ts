import {ConnectionDirection} from './connectionDirection';
import {ConnectionStatus} from './connectionStatus';
import {SecurityNetworkProtocol} from './securityNetworkProtocol';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface NetworkConnection extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Name of the application managing the network connection (for example, Facebook or SMTP).
     */
    applicationName?: string | undefined;
    /**
     * Destination IP address (of the network connection).
     */
    destinationAddress?: string | undefined;
    /**
     * Destination domain portion of the destination URL. (for example 'www.contoso.com').
     */
    destinationDomain?: string | undefined;
    /**
     * Location (by IP address mapping) associated with the destination of a network connection.
     */
    destinationLocation?: string | undefined;
    /**
     * Destination port (of the network connection).
     */
    destinationPort?: string | undefined;
    /**
     * Network connection URL/URI string - excluding parameters. (for example 'www.contoso.com/products/default.html')
     */
    destinationUrl?: string | undefined;
    /**
     * Network connection direction. Possible values are: unknown, inbound, outbound.
     */
    direction?: ConnectionDirection | undefined;
    /**
     * Date when the destination domain was registered. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    domainRegisteredDateTime?: Date | undefined;
    /**
     * The local DNS name resolution as it appears in the host's local DNS cache (for example, in case the 'hosts' file was tampered with).
     */
    localDnsName?: string | undefined;
    /**
     * Network Address Translation destination IP address.
     */
    natDestinationAddress?: string | undefined;
    /**
     * Network Address Translation destination port.
     */
    natDestinationPort?: string | undefined;
    /**
     * Network Address Translation source IP address.
     */
    natSourceAddress?: string | undefined;
    /**
     * Network Address Translation source port.
     */
    natSourcePort?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Network protocol. Possible values are: unknown, ip, icmp, igmp, ggp, ipv4, tcp, pup, udp, idp, ipv6, ipv6RoutingHeader, ipv6FragmentHeader, ipSecEncapsulatingSecurityPayload, ipSecAuthenticationHeader, icmpV6, ipv6NoNextHeader, ipv6DestinationOptions, nd, raw, ipx, spx, spxII.
     */
    protocol?: SecurityNetworkProtocol | undefined;
    /**
     * Provider generated/calculated risk score of the network connection. Recommended value range of 0-1, which equates to a percentage.
     */
    riskScore?: string | undefined;
    /**
     * Source (i.e. origin) IP address (of the network connection).
     */
    sourceAddress?: string | undefined;
    /**
     * Location (by IP address mapping) associated with the source of a network connection.
     */
    sourceLocation?: string | undefined;
    /**
     * Source (i.e. origin) IP port (of the network connection).
     */
    sourcePort?: string | undefined;
    /**
     * Network connection status. Possible values are: unknown, attempted, succeeded, blocked, failed.
     */
    status?: ConnectionStatus | undefined;
    /**
     * Parameters (suffix) of the destination URL.
     */
    urlParameters?: string | undefined;
}
