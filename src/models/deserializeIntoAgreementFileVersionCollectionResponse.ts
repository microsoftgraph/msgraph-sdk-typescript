import { type AgreementFileVersion } from './agreementFileVersion';
import { type AgreementFileVersionCollectionResponse } from './agreementFileVersionCollectionResponse';
import { createAgreementFileVersionFromDiscriminatorValue } from './createAgreementFileVersionFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeAgreementFileVersion } from './serializeAgreementFileVersion';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAgreementFileVersionCollectionResponse(agreementFileVersionCollectionResponse: AgreementFileVersionCollectionResponse | undefined = {} as AgreementFileVersionCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(agreementFileVersionCollectionResponse),
        "value": n => { agreementFileVersionCollectionResponse.value = n.getCollectionOfObjectValues<AgreementFileVersion>(createAgreementFileVersionFromDiscriminatorValue); },
    }
}
