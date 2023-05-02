import {AgreementAcceptance} from './agreementAcceptance';
import {AgreementAcceptanceCollectionResponse} from './agreementAcceptanceCollectionResponse';
import {serializeAgreementAcceptance} from './serializeAgreementAcceptance';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAgreementAcceptanceCollectionResponse(writer: SerializationWriter, agreementAcceptanceCollectionResponse: AgreementAcceptanceCollectionResponse | undefined = {} as AgreementAcceptanceCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, agreementAcceptanceCollectionResponse)
        writer.writeCollectionOfObjectValues<AgreementAcceptance>("value", agreementAcceptanceCollectionResponse.value, serializeAgreementAcceptance);
}
