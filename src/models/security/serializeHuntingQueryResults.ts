import {HuntingQueryResults} from './huntingQueryResults';
import {HuntingRowResult} from './huntingRowResult';
import {serializeHuntingRowResult} from './serializeHuntingRowResult';
import {serializeSinglePropertySchema} from './serializeSinglePropertySchema';
import {SinglePropertySchema} from './singlePropertySchema';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeHuntingQueryResults(writer: SerializationWriter, huntingQueryResults: HuntingQueryResults | undefined = {} as HuntingQueryResults) : void {
        writer.writeStringValue("@odata.type", huntingQueryResults.odataType);
        writer.writeCollectionOfObjectValues<HuntingRowResult>("results", huntingQueryResults.results, serializeHuntingRowResult);
        writer.writeCollectionOfObjectValues<SinglePropertySchema>("schema", huntingQueryResults.schema, serializeSinglePropertySchema);
        writer.writeAdditionalData(huntingQueryResults.additionalData);
}
