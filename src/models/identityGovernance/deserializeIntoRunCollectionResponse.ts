import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {createRunFromDiscriminatorValue} from './createRunFromDiscriminatorValue';
import {Run} from './run';
import {RunCollectionResponse} from './runCollectionResponse';
import {serializeRun} from './serializeRun';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRunCollectionResponse(runCollectionResponse: RunCollectionResponse | undefined = {} as RunCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(runCollectionResponse),
        "value": n => { runCollectionResponse.value = n.getCollectionOfObjectValues<Run>(createRunFromDiscriminatorValue); },
    }
}
