import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import type {Run} from './run';
import type {RunCollectionResponse} from './runCollectionResponse';
import {serializeRun} from './serializeRun';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRunCollectionResponse(writer: SerializationWriter, runCollectionResponse: RunCollectionResponse | undefined = {} as RunCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, runCollectionResponse)
        writer.writeCollectionOfObjectValues<Run>("value", runCollectionResponse.value, serializeRun);
}
