import {ConditionalAccessPolicy} from './conditionalAccessPolicy';
import {ConditionalAccessPolicyCollectionResponse} from './conditionalAccessPolicyCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeConditionalAccessPolicy} from './serializeConditionalAccessPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConditionalAccessPolicyCollectionResponse(conditionalAccessPolicyCollectionResponse: ConditionalAccessPolicyCollectionResponse | undefined = {} as ConditionalAccessPolicyCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, conditionalAccessPolicyCollectionResponse)
        writer.writeCollectionOfObjectValues<ConditionalAccessPolicy>("value", conditionalAccessPolicyCollectionResponse.value, serializeConditionalAccessPolicy);
}
