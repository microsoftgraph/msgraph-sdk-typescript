import {CertificateBasedAuthConfiguration} from './certificateBasedAuthConfiguration';
import {CertificateBasedAuthConfigurationCollectionResponse} from './certificateBasedAuthConfigurationCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeCertificateBasedAuthConfiguration} from './serializeCertificateBasedAuthConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCertificateBasedAuthConfigurationCollectionResponse(certificateBasedAuthConfigurationCollectionResponse: CertificateBasedAuthConfigurationCollectionResponse | undefined = {} as CertificateBasedAuthConfigurationCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, certificateBasedAuthConfigurationCollectionResponse)
        writer.writeCollectionOfObjectValues<CertificateBasedAuthConfiguration>("value", certificateBasedAuthConfigurationCollectionResponse.value, serializeCertificateBasedAuthConfiguration);
}
