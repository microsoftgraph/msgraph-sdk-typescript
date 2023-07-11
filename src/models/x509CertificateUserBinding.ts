import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface X509CertificateUserBinding extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The priority of the binding. Azure AD uses the binding with the highest priority. This value must be a non-negative integer and unique in the collection of objects in the certificateUserBindings property of an x509CertificateAuthenticationMethodConfiguration object. Required
     */
    priority?: number | undefined;
    /**
     * Defines the Azure AD user property of the user object to use for the binding. The possible values are: userPrincipalName, onPremisesUserPrincipalName, certificateUserIds. Required.
     */
    userProperty?: string | undefined;
    /**
     * The field on the X.509 certificate to use for the binding. The possible values are: PrincipalName, RFC822Name, SubjectKeyIdentifier, SHA1PublicKey.
     */
    x509CertificateField?: string | undefined;
}
