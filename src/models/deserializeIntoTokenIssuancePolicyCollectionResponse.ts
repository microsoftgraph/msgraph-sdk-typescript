import {createTokenIssuancePolicyFromDiscriminatorValue} from './createTokenIssuancePolicyFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeTokenIssuancePolicy} from './serializeTokenIssuancePolicy';
import type {TokenIssuancePolicy} from './tokenIssuancePolicy';
import type {TokenIssuancePolicyCollectionResponse} from './tokenIssuancePolicyCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTokenIssuancePolicyCollectionResponse(tokenIssuancePolicyCollectionResponse: TokenIssuancePolicyCollectionResponse | undefined = {} as TokenIssuancePolicyCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(tokenIssuancePolicyCollectionResponse),
        "value": n => { tokenIssuancePolicyCollectionResponse.value = n.getCollectionOfObjectValues<TokenIssuancePolicy>(createTokenIssuancePolicyFromDiscriminatorValue); },
    }
}
