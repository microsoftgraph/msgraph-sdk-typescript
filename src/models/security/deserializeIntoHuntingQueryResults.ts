import {createHuntingRowResultFromDiscriminatorValue} from './createHuntingRowResultFromDiscriminatorValue';
import {createSinglePropertySchemaFromDiscriminatorValue} from './createSinglePropertySchemaFromDiscriminatorValue';
import type {HuntingQueryResults} from './huntingQueryResults';
import type {HuntingRowResult} from './huntingRowResult';
import {serializeHuntingRowResult} from './serializeHuntingRowResult';
import {serializeSinglePropertySchema} from './serializeSinglePropertySchema';
import type {SinglePropertySchema} from './singlePropertySchema';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoHuntingQueryResults(huntingQueryResults: HuntingQueryResults | undefined = {} as HuntingQueryResults) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { huntingQueryResults.odataType = n.getStringValue(); },
        "results": n => { huntingQueryResults.results = n.getCollectionOfObjectValues<HuntingRowResult>(createHuntingRowResultFromDiscriminatorValue); },
        "schema": n => { huntingQueryResults.schema = n.getCollectionOfObjectValues<SinglePropertySchema>(createSinglePropertySchemaFromDiscriminatorValue); },
    }
}
