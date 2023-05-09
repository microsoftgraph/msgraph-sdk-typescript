import {SinglePropertySchema} from './singlePropertySchema';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSinglePropertySchema(singlePropertySchema: SinglePropertySchema | undefined = {} as SinglePropertySchema) : Record<string, (node: ParseNode) => void> {
    return {
        "name": n => { singlePropertySchema.name = n.getStringValue(); },
        "@odata.type": n => { singlePropertySchema.odataType = n.getStringValue(); },
        "type": n => { singlePropertySchema.type = n.getStringValue(); },
    }
}
