import {AgreementFileLocalization} from './agreementFileLocalization';
import {AgreementFileLocalizationCollectionResponse} from './agreementFileLocalizationCollectionResponse';
import {createAgreementFileLocalizationFromDiscriminatorValue} from './createAgreementFileLocalizationFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeAgreementFileLocalization} from './serializeAgreementFileLocalization';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAgreementFileLocalizationCollectionResponse(agreementFileLocalizationCollectionResponse: AgreementFileLocalizationCollectionResponse | undefined = {} as AgreementFileLocalizationCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(agreementFileLocalizationCollectionResponse),
        "value": n => { agreementFileLocalizationCollectionResponse.value = n.getCollectionOfObjectValues<AgreementFileLocalization>(createAgreementFileLocalizationFromDiscriminatorValue); },
    }
}
