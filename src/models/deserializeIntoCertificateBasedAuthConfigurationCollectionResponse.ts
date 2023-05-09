import {CertificateBasedAuthConfiguration} from './certificateBasedAuthConfiguration';
import {CertificateBasedAuthConfigurationCollectionResponse} from './certificateBasedAuthConfigurationCollectionResponse';
import {createCertificateBasedAuthConfigurationFromDiscriminatorValue} from './createCertificateBasedAuthConfigurationFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeCertificateBasedAuthConfiguration} from './serializeCertificateBasedAuthConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCertificateBasedAuthConfigurationCollectionResponse(certificateBasedAuthConfigurationCollectionResponse: CertificateBasedAuthConfigurationCollectionResponse | undefined = {} as CertificateBasedAuthConfigurationCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(certificateBasedAuthConfigurationCollectionResponse),
        "value": n => { certificateBasedAuthConfigurationCollectionResponse.value = n.getCollectionOfObjectValues<CertificateBasedAuthConfiguration>(createCertificateBasedAuthConfigurationFromDiscriminatorValue); },
    }
}
