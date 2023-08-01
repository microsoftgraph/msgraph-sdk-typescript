import type {ConditionalAccessPolicy} from './conditionalAccessPolicy';
import type {ConditionalAccessPolicyCollectionResponse} from './conditionalAccessPolicyCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeConditionalAccessPolicy} from './serializeConditionalAccessPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConditionalAccessPolicyCollectionResponse(writer: SerializationWriter, conditionalAccessPolicyCollectionResponse: ConditionalAccessPolicyCollectionResponse | undefined = {} as ConditionalAccessPolicyCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, conditionalAccessPolicyCollectionResponse)
        writer.writeCollectionOfObjectValues<ConditionalAccessPolicy>("value", conditionalAccessPolicyCollectionResponse.value, serializeConditionalAccessPolicy);
}
