import {UserInstallStateSummaryCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserInstallStateSummaryCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserInstallStateSummaryCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserInstallStateSummaryCollectionResponseImpl();
}
