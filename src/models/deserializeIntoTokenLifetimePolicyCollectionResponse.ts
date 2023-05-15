import {createTokenLifetimePolicyFromDiscriminatorValue} from './createTokenLifetimePolicyFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeTokenLifetimePolicy} from './serializeTokenLifetimePolicy';
import {TokenLifetimePolicy} from './tokenLifetimePolicy';
import {TokenLifetimePolicyCollectionResponse} from './tokenLifetimePolicyCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTokenLifetimePolicyCollectionResponse(tokenLifetimePolicyCollectionResponse: TokenLifetimePolicyCollectionResponse | undefined = {} as TokenLifetimePolicyCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(tokenLifetimePolicyCollectionResponse),
        "value": n => { tokenLifetimePolicyCollectionResponse.value = n.getCollectionOfObjectValues<TokenLifetimePolicy>(createTokenLifetimePolicyFromDiscriminatorValue); },
    }
}
