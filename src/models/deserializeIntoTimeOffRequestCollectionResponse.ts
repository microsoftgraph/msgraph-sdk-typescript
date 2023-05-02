import {createTimeOffRequestFromDiscriminatorValue} from './createTimeOffRequestFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeTimeOffRequest} from './serializeTimeOffRequest';
import {TimeOffRequest} from './timeOffRequest';
import {TimeOffRequestCollectionResponse} from './timeOffRequestCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTimeOffRequestCollectionResponse(timeOffRequestCollectionResponse: TimeOffRequestCollectionResponse | undefined = {} as TimeOffRequestCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(timeOffRequestCollectionResponse),
        "value": n => { timeOffRequestCollectionResponse.value = n.getCollectionOfObjectValues<TimeOffRequest>(createTimeOffRequestFromDiscriminatorValue); },
    }
}
