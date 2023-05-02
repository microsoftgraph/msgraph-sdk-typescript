import {deserializeIntoEntity} from './deserializeIntoEntity';
import {PrintServiceEndpoint} from './printServiceEndpoint';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintServiceEndpoint(printServiceEndpoint: PrintServiceEndpoint | undefined = {} as PrintServiceEndpoint) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(printServiceEndpoint),
        "displayName": n => { printServiceEndpoint.displayName = n.getStringValue(); },
        "uri": n => { printServiceEndpoint.uri = n.getStringValue(); },
    }
}
