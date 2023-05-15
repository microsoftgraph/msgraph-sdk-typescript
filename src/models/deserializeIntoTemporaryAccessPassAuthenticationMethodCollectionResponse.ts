import {createTemporaryAccessPassAuthenticationMethodFromDiscriminatorValue} from './createTemporaryAccessPassAuthenticationMethodFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeTemporaryAccessPassAuthenticationMethod} from './serializeTemporaryAccessPassAuthenticationMethod';
import {TemporaryAccessPassAuthenticationMethod} from './temporaryAccessPassAuthenticationMethod';
import {TemporaryAccessPassAuthenticationMethodCollectionResponse} from './temporaryAccessPassAuthenticationMethodCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTemporaryAccessPassAuthenticationMethodCollectionResponse(temporaryAccessPassAuthenticationMethodCollectionResponse: TemporaryAccessPassAuthenticationMethodCollectionResponse | undefined = {} as TemporaryAccessPassAuthenticationMethodCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(temporaryAccessPassAuthenticationMethodCollectionResponse),
        "value": n => { temporaryAccessPassAuthenticationMethodCollectionResponse.value = n.getCollectionOfObjectValues<TemporaryAccessPassAuthenticationMethod>(createTemporaryAccessPassAuthenticationMethodFromDiscriminatorValue); },
    }
}
