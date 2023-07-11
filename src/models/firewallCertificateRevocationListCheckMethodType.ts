/**
 * Possible values for firewallCertificateRevocationListCheckMethod
 */
export enum FirewallCertificateRevocationListCheckMethodType {
    /** No value configured by Intune, do not override the user-configured device default value */
    DeviceDefault = "deviceDefault",
    /** Do not check certificate revocation list */
    None = "none",
    /** Attempt CRL check and allow a certificate only if the certificate is confirmed by the check */
    Attempt = "attempt",
    /** Require a successful CRL check before allowing a certificate */
    Require = "require",
}
