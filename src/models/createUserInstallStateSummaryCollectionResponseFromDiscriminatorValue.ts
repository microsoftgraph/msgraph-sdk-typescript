import { deserializeIntoUserInstallStateSummaryCollectionResponse } from './deserializeIntoUserInstallStateSummaryCollectionResponse';
import { type UserInstallStateSummaryCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserInstallStateSummaryCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserInstallStateSummaryCollectionResponse;
}
