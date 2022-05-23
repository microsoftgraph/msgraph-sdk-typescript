import {UserInstallStateSummaryImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserInstallStateSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserInstallStateSummaryImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserInstallStateSummaryImpl();
}
