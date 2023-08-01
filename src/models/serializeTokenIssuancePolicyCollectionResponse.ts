import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTokenIssuancePolicy} from './serializeTokenIssuancePolicy';
import type {TokenIssuancePolicy} from './tokenIssuancePolicy';
import type {TokenIssuancePolicyCollectionResponse} from './tokenIssuancePolicyCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTokenIssuancePolicyCollectionResponse(writer: SerializationWriter, tokenIssuancePolicyCollectionResponse: TokenIssuancePolicyCollectionResponse | undefined = {} as TokenIssuancePolicyCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, tokenIssuancePolicyCollectionResponse)
        writer.writeCollectionOfObjectValues<TokenIssuancePolicy>("value", tokenIssuancePolicyCollectionResponse.value, serializeTokenIssuancePolicy);
}
