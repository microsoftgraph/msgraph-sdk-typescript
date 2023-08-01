import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {createUserSourceFromDiscriminatorValue} from './createUserSourceFromDiscriminatorValue';
import {serializeUserSource} from './serializeUserSource';
import type {UserSource} from './userSource';
import type {UserSourceCollectionResponse} from './userSourceCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserSourceCollectionResponse(userSourceCollectionResponse: UserSourceCollectionResponse | undefined = {} as UserSourceCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(userSourceCollectionResponse),
        "value": n => { userSourceCollectionResponse.value = n.getCollectionOfObjectValues<UserSource>(createUserSourceFromDiscriminatorValue); },
    }
}
