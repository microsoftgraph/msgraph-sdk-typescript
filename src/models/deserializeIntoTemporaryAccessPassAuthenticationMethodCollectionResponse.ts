import { createTemporaryAccessPassAuthenticationMethodFromDiscriminatorValue } from './createTemporaryAccessPassAuthenticationMethodFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeTemporaryAccessPassAuthenticationMethod } from './serializeTemporaryAccessPassAuthenticationMethod';
import { type TemporaryAccessPassAuthenticationMethod } from './temporaryAccessPassAuthenticationMethod';
import { type TemporaryAccessPassAuthenticationMethodCollectionResponse } from './temporaryAccessPassAuthenticationMethodCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTemporaryAccessPassAuthenticationMethodCollectionResponse(temporaryAccessPassAuthenticationMethodCollectionResponse: TemporaryAccessPassAuthenticationMethodCollectionResponse | undefined = {} as TemporaryAccessPassAuthenticationMethodCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(temporaryAccessPassAuthenticationMethodCollectionResponse),
        "value": n => { temporaryAccessPassAuthenticationMethodCollectionResponse.value = n.getCollectionOfObjectValues<TemporaryAccessPassAuthenticationMethod>(createTemporaryAccessPassAuthenticationMethodFromDiscriminatorValue); },
    }
}
