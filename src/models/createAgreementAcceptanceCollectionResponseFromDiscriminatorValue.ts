import {AgreementAcceptanceCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAgreementAcceptanceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AgreementAcceptanceCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AgreementAcceptanceCollectionResponseImpl();
}
