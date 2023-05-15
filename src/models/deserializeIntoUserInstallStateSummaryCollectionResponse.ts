import {createUserInstallStateSummaryFromDiscriminatorValue} from './createUserInstallStateSummaryFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeUserInstallStateSummary} from './serializeUserInstallStateSummary';
import {UserInstallStateSummary} from './userInstallStateSummary';
import {UserInstallStateSummaryCollectionResponse} from './userInstallStateSummaryCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserInstallStateSummaryCollectionResponse(userInstallStateSummaryCollectionResponse: UserInstallStateSummaryCollectionResponse | undefined = {} as UserInstallStateSummaryCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(userInstallStateSummaryCollectionResponse),
        "value": n => { userInstallStateSummaryCollectionResponse.value = n.getCollectionOfObjectValues<UserInstallStateSummary>(createUserInstallStateSummaryFromDiscriminatorValue); },
    }
}
