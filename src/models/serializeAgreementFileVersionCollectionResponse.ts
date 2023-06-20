import {AgreementFileVersion} from './agreementFileVersion';
import {AgreementFileVersionCollectionResponse} from './agreementFileVersionCollectionResponse';
import {serializeAgreementFileVersion} from './serializeAgreementFileVersion';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAgreementFileVersionCollectionResponse(agreementFileVersionCollectionResponse: AgreementFileVersionCollectionResponse | undefined = {} as AgreementFileVersionCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, agreementFileVersionCollectionResponse)
        writer.writeCollectionOfObjectValues<AgreementFileVersion>("value", agreementFileVersionCollectionResponse.value, serializeAgreementFileVersion);
}
