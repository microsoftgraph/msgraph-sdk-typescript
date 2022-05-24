
export interface ProxiedDomain{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The IP address or FQDN */
    ipAddressOrFQDN?:string | undefined;
    /** Proxy IP or FQDN */
    proxy?:string | undefined;
}
