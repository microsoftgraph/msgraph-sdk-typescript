import {serializeBaseCollectionPaginationCountResponse} from '../../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeUserActivity} from '../../../../models/serializeUserActivity';
import type {UserActivity} from '../../../../models/userActivity';
import type {RecentResponse} from './recentResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRecentResponse(writer: SerializationWriter, recentResponse: RecentResponse | undefined = {} as RecentResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, recentResponse)
        writer.writeCollectionOfObjectValues<UserActivity>("value", recentResponse.value, serializeUserActivity);
}
