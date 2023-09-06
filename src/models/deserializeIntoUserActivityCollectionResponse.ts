import { createUserActivityFromDiscriminatorValue } from './createUserActivityFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeUserActivity } from './serializeUserActivity';
import { type UserActivity } from './userActivity';
import { type UserActivityCollectionResponse } from './userActivityCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUserActivityCollectionResponse(userActivityCollectionResponse: UserActivityCollectionResponse | undefined = {} as UserActivityCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(userActivityCollectionResponse),
        "value": n => { userActivityCollectionResponse.value = n.getCollectionOfObjectValues<UserActivity>(createUserActivityFromDiscriminatorValue); },
    }
}
