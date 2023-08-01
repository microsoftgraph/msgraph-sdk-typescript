import {createUserActivityFromDiscriminatorValue} from '../../../models/createUserActivityFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeUserActivity} from '../../../models/serializeUserActivity';
import type {UserActivity} from '../../../models/userActivity';
import type {RecentResponse} from './recentResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRecentResponse(recentResponse: RecentResponse | undefined = {} as RecentResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(recentResponse),
        "value": n => { recentResponse.value = n.getCollectionOfObjectValues<UserActivity>(createUserActivityFromDiscriminatorValue); },
    }
}
