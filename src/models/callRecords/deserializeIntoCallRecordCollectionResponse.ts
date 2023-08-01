import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import type {CallRecord} from './callRecord';
import type {CallRecordCollectionResponse} from './callRecordCollectionResponse';
import {createCallRecordFromDiscriminatorValue} from './createCallRecordFromDiscriminatorValue';
import {serializeCallRecord} from './serializeCallRecord';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCallRecordCollectionResponse(callRecordCollectionResponse: CallRecordCollectionResponse | undefined = {} as CallRecordCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(callRecordCollectionResponse),
        "value": n => { callRecordCollectionResponse.value = n.getCollectionOfObjectValues<CallRecord>(createCallRecordFromDiscriminatorValue); },
    }
}
