import { deserializeIntoUserInstallStateSummary } from './deserializeIntoUserInstallStateSummary';
import { type UserInstallStateSummary } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserInstallStateSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserInstallStateSummary;
}
