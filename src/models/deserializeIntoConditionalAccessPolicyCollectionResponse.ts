import {ConditionalAccessPolicy} from './conditionalAccessPolicy';
import {ConditionalAccessPolicyCollectionResponse} from './conditionalAccessPolicyCollectionResponse';
import {createConditionalAccessPolicyFromDiscriminatorValue} from './createConditionalAccessPolicyFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeConditionalAccessPolicy} from './serializeConditionalAccessPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConditionalAccessPolicyCollectionResponse(conditionalAccessPolicyCollectionResponse: ConditionalAccessPolicyCollectionResponse | undefined = {} as ConditionalAccessPolicyCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(conditionalAccessPolicyCollectionResponse),
        "value": n => { conditionalAccessPolicyCollectionResponse.value = n.getCollectionOfObjectValues<ConditionalAccessPolicy>(createConditionalAccessPolicyFromDiscriminatorValue); },
    }
}
