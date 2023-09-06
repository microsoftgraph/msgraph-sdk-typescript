import { type SizeRange } from './sizeRange';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSizeRange(sizeRange: SizeRange | undefined = {} as SizeRange) : Record<string, (node: ParseNode) => void> {
    return {
        "maximumSize": n => { sizeRange.maximumSize = n.getNumberValue(); },
        "minimumSize": n => { sizeRange.minimumSize = n.getNumberValue(); },
        "@odata.type": n => { sizeRange.odataType = n.getStringValue(); },
    }
}
