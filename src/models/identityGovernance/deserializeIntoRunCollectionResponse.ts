import { deserializeIntoBaseCollectionPaginationCountResponse } from '../deserializeIntoBaseCollectionPaginationCountResponse';
import { createRunFromDiscriminatorValue } from './createRunFromDiscriminatorValue';
import { type Run } from './run';
import { type RunCollectionResponse } from './runCollectionResponse';
import { serializeRun } from './serializeRun';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoRunCollectionResponse(runCollectionResponse: RunCollectionResponse | undefined = {} as RunCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(runCollectionResponse),
        "value": n => { runCollectionResponse.value = n.getCollectionOfObjectValues<Run>(createRunFromDiscriminatorValue); },
    }
}
