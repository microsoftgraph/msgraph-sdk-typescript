import type {AgreementFileVersion} from './agreementFileVersion';
import type {AgreementFileVersionCollectionResponse} from './agreementFileVersionCollectionResponse';
import {serializeAgreementFileVersion} from './serializeAgreementFileVersion';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAgreementFileVersionCollectionResponse(writer: SerializationWriter, agreementFileVersionCollectionResponse: AgreementFileVersionCollectionResponse | undefined = {} as AgreementFileVersionCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, agreementFileVersionCollectionResponse)
        writer.writeCollectionOfObjectValues<AgreementFileVersion>("value", agreementFileVersionCollectionResponse.value, serializeAgreementFileVersion);
}
