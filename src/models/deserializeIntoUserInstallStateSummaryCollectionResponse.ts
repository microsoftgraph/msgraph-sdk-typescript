import {createUserInstallStateSummaryFromDiscriminatorValue} from './createUserInstallStateSummaryFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeUserInstallStateSummary} from './serializeUserInstallStateSummary';
import type {UserInstallStateSummary} from './userInstallStateSummary';
import type {UserInstallStateSummaryCollectionResponse} from './userInstallStateSummaryCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserInstallStateSummaryCollectionResponse(userInstallStateSummaryCollectionResponse: UserInstallStateSummaryCollectionResponse | undefined = {} as UserInstallStateSummaryCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(userInstallStateSummaryCollectionResponse),
        "value": n => { userInstallStateSummaryCollectionResponse.value = n.getCollectionOfObjectValues<UserInstallStateSummary>(createUserInstallStateSummaryFromDiscriminatorValue); },
    }
}
