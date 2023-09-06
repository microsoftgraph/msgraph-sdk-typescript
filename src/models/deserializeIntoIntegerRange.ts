import { type IntegerRange } from './integerRange';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoIntegerRange(integerRange: IntegerRange | undefined = {} as IntegerRange) : Record<string, (node: ParseNode) => void> {
    return {
        "end": n => { integerRange.end = n.getNumberValue(); },
        "@odata.type": n => { integerRange.odataType = n.getStringValue(); },
        "start": n => { integerRange.start = n.getNumberValue(); },
    }
}
