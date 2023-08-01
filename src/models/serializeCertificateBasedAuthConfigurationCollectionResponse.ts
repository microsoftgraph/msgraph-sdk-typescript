import type {CertificateBasedAuthConfiguration} from './certificateBasedAuthConfiguration';
import type {CertificateBasedAuthConfigurationCollectionResponse} from './certificateBasedAuthConfigurationCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeCertificateBasedAuthConfiguration} from './serializeCertificateBasedAuthConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCertificateBasedAuthConfigurationCollectionResponse(writer: SerializationWriter, certificateBasedAuthConfigurationCollectionResponse: CertificateBasedAuthConfigurationCollectionResponse | undefined = {} as CertificateBasedAuthConfigurationCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, certificateBasedAuthConfigurationCollectionResponse)
        writer.writeCollectionOfObjectValues<CertificateBasedAuthConfiguration>("value", certificateBasedAuthConfigurationCollectionResponse.value, serializeCertificateBasedAuthConfiguration);
}
