import { type Agreement } from './agreement';
import { type AgreementCollectionResponse } from './agreementCollectionResponse';
import { serializeAgreement } from './serializeAgreement';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAgreementCollectionResponse(writer: SerializationWriter, agreementCollectionResponse: AgreementCollectionResponse | undefined = {} as AgreementCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, agreementCollectionResponse)
        writer.writeCollectionOfObjectValues<Agreement>("value", agreementCollectionResponse.value, serializeAgreement);
}
