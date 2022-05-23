import {AgreementFileVersionCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAgreementFileVersionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AgreementFileVersionCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AgreementFileVersionCollectionResponseImpl();
}
