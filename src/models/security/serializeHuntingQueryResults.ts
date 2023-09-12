import { type HuntingQueryResults } from './huntingQueryResults';
import { type HuntingRowResult } from './huntingRowResult';
import { serializeHuntingRowResult } from './serializeHuntingRowResult';
import { serializeSinglePropertySchema } from './serializeSinglePropertySchema';
import { type SinglePropertySchema } from './singlePropertySchema';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeHuntingQueryResults(writer: SerializationWriter, huntingQueryResults: HuntingQueryResults | undefined = {} as HuntingQueryResults) : void {
        writer.writeStringValue("@odata.type", huntingQueryResults.odataType);
        writer.writeCollectionOfObjectValues<HuntingRowResult>("results", huntingQueryResults.results, serializeHuntingRowResult);
        writer.writeCollectionOfObjectValues<SinglePropertySchema>("schema", huntingQueryResults.schema, serializeSinglePropertySchema);
        writer.writeAdditionalData(huntingQueryResults.additionalData);
}
