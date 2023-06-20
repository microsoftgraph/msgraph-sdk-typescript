import {Agreement} from './agreement';
import {AgreementCollectionResponse} from './agreementCollectionResponse';
import {serializeAgreement} from './serializeAgreement';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAgreementCollectionResponse(agreementCollectionResponse: AgreementCollectionResponse | undefined = {} as AgreementCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, agreementCollectionResponse)
        writer.writeCollectionOfObjectValues<Agreement>("value", agreementCollectionResponse.value, serializeAgreement);
}
