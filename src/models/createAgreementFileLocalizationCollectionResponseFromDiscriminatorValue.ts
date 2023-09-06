import { deserializeIntoAgreementFileLocalizationCollectionResponse } from './deserializeIntoAgreementFileLocalizationCollectionResponse';
import { type AgreementFileLocalizationCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAgreementFileLocalizationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAgreementFileLocalizationCollectionResponse;
}
