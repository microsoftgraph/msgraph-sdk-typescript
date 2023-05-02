import {deserializeIntoAgreementAcceptanceCollectionResponse} from './deserializeIntoAgreementAcceptanceCollectionResponse';
import {AgreementAcceptanceCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAgreementAcceptanceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAgreementAcceptanceCollectionResponse;
}
