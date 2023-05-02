import {deserializeIntoUserInstallStateSummary} from './deserializeIntoUserInstallStateSummary';
import {UserInstallStateSummary} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserInstallStateSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserInstallStateSummary;
}
