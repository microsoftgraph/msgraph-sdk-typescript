import type {HuntingRowResult} from './huntingRowResult';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoHuntingRowResult(huntingRowResult: HuntingRowResult | undefined = {} as HuntingRowResult) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { huntingRowResult.odataType = n.getStringValue(); },
    }
}
