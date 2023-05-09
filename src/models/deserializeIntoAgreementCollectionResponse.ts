import {Agreement} from './agreement';
import {AgreementCollectionResponse} from './agreementCollectionResponse';
import {createAgreementFromDiscriminatorValue} from './createAgreementFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeAgreement} from './serializeAgreement';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAgreementCollectionResponse(agreementCollectionResponse: AgreementCollectionResponse | undefined = {} as AgreementCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(agreementCollectionResponse),
        "value": n => { agreementCollectionResponse.value = n.getCollectionOfObjectValues<Agreement>(createAgreementFromDiscriminatorValue); },
    }
}
