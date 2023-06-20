import {AgreementFileLocalization} from './agreementFileLocalization';
import {AgreementFileLocalizationCollectionResponse} from './agreementFileLocalizationCollectionResponse';
import {serializeAgreementFileLocalization} from './serializeAgreementFileLocalization';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAgreementFileLocalizationCollectionResponse(agreementFileLocalizationCollectionResponse: AgreementFileLocalizationCollectionResponse | undefined = {} as AgreementFileLocalizationCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, agreementFileLocalizationCollectionResponse)
        writer.writeCollectionOfObjectValues<AgreementFileLocalization>("value", agreementFileLocalizationCollectionResponse.value, serializeAgreementFileLocalization);
}
