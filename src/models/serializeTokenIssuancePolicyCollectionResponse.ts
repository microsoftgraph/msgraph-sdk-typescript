import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTokenIssuancePolicy} from './serializeTokenIssuancePolicy';
import {TokenIssuancePolicy} from './tokenIssuancePolicy';
import {TokenIssuancePolicyCollectionResponse} from './tokenIssuancePolicyCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTokenIssuancePolicyCollectionResponse(writer: SerializationWriter, tokenIssuancePolicyCollectionResponse: TokenIssuancePolicyCollectionResponse | undefined = {} as TokenIssuancePolicyCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, tokenIssuancePolicyCollectionResponse)
        writer.writeCollectionOfObjectValues<TokenIssuancePolicy>("value", tokenIssuancePolicyCollectionResponse.value, serializeTokenIssuancePolicy);
}
