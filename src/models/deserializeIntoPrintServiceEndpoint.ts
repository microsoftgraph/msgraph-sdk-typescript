import {deserializeIntoEntity} from './deserializeIntoEntity';
import type {PrintServiceEndpoint} from './printServiceEndpoint';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintServiceEndpoint(printServiceEndpoint: PrintServiceEndpoint | undefined = {} as PrintServiceEndpoint) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(printServiceEndpoint),
        "displayName": n => { printServiceEndpoint.displayName = n.getStringValue(); },
        "uri": n => { printServiceEndpoint.uri = n.getStringValue(); },
    }
}
