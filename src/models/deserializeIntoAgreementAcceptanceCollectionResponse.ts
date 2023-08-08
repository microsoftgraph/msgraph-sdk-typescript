import type {AgreementAcceptance} from './agreementAcceptance';
import type {AgreementAcceptanceCollectionResponse} from './agreementAcceptanceCollectionResponse';
import {createAgreementAcceptanceFromDiscriminatorValue} from './createAgreementAcceptanceFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeAgreementAcceptance} from './serializeAgreementAcceptance';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAgreementAcceptanceCollectionResponse(agreementAcceptanceCollectionResponse: AgreementAcceptanceCollectionResponse | undefined = {} as AgreementAcceptanceCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(agreementAcceptanceCollectionResponse),
        "value": n => { agreementAcceptanceCollectionResponse.value = n.getCollectionOfObjectValues<AgreementAcceptance>(createAgreementAcceptanceFromDiscriminatorValue); },
    }
}
