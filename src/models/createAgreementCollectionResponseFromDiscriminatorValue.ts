import {AgreementCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAgreementCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AgreementCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AgreementCollectionResponseImpl();
}
