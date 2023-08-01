import type {AgreementFileLocalization} from './agreementFileLocalization';
import type {AgreementFileLocalizationCollectionResponse} from './agreementFileLocalizationCollectionResponse';
import {serializeAgreementFileLocalization} from './serializeAgreementFileLocalization';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAgreementFileLocalizationCollectionResponse(writer: SerializationWriter, agreementFileLocalizationCollectionResponse: AgreementFileLocalizationCollectionResponse | undefined = {} as AgreementFileLocalizationCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, agreementFileLocalizationCollectionResponse)
        writer.writeCollectionOfObjectValues<AgreementFileLocalization>("value", agreementFileLocalizationCollectionResponse.value, serializeAgreementFileLocalization);
}
