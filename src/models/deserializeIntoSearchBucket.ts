import type {SearchBucket} from './searchBucket';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSearchBucket(searchBucket: SearchBucket | undefined = {} as SearchBucket) : Record<string, (node: ParseNode) => void> {
    return {
        "aggregationFilterToken": n => { searchBucket.aggregationFilterToken = n.getStringValue(); },
        "count": n => { searchBucket.count = n.getNumberValue(); },
        "key": n => { searchBucket.key = n.getStringValue(); },
        "@odata.type": n => { searchBucket.odataType = n.getStringValue(); },
    }
}
