import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUserActivity} from './serializeUserActivity';
import {UserActivity} from './userActivity';
import {UserActivityCollectionResponse} from './userActivityCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserActivityCollectionResponse(writer: SerializationWriter, userActivityCollectionResponse: UserActivityCollectionResponse | undefined = {} as UserActivityCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, userActivityCollectionResponse)
        writer.writeCollectionOfObjectValues<UserActivity>("value", userActivityCollectionResponse.value, serializeUserActivity);
}
