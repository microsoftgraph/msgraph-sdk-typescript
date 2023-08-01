import type {AppLogCollectionRequest} from './appLogCollectionRequest';
import type {AppLogCollectionRequestCollectionResponse} from './appLogCollectionRequestCollectionResponse';
import {createAppLogCollectionRequestFromDiscriminatorValue} from './createAppLogCollectionRequestFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeAppLogCollectionRequest} from './serializeAppLogCollectionRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAppLogCollectionRequestCollectionResponse(appLogCollectionRequestCollectionResponse: AppLogCollectionRequestCollectionResponse | undefined = {} as AppLogCollectionRequestCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(appLogCollectionRequestCollectionResponse),
        "value": n => { appLogCollectionRequestCollectionResponse.value = n.getCollectionOfObjectValues<AppLogCollectionRequest>(createAppLogCollectionRequestFromDiscriminatorValue); },
    }
}
