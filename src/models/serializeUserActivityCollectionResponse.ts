import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeUserActivity } from './serializeUserActivity';
import { type UserActivity } from './userActivity';
import { type UserActivityCollectionResponse } from './userActivityCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUserActivityCollectionResponse(writer: SerializationWriter, userActivityCollectionResponse: UserActivityCollectionResponse | undefined = {} as UserActivityCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, userActivityCollectionResponse)
        writer.writeCollectionOfObjectValues<UserActivity>("value", userActivityCollectionResponse.value, serializeUserActivity);
}
