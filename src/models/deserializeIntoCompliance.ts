import {Compliance} from './compliance';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCompliance(compliance: Compliance | undefined = {} as Compliance) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { compliance.odataType = n.getStringValue(); },
    }
}
