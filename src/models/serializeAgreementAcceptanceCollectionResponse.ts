import { type AgreementAcceptance } from './agreementAcceptance';
import { type AgreementAcceptanceCollectionResponse } from './agreementAcceptanceCollectionResponse';
import { serializeAgreementAcceptance } from './serializeAgreementAcceptance';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAgreementAcceptanceCollectionResponse(writer: SerializationWriter, agreementAcceptanceCollectionResponse: AgreementAcceptanceCollectionResponse | undefined = {} as AgreementAcceptanceCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, agreementAcceptanceCollectionResponse)
        writer.writeCollectionOfObjectValues<AgreementAcceptance>("value", agreementAcceptanceCollectionResponse.value, serializeAgreementAcceptance);
}
