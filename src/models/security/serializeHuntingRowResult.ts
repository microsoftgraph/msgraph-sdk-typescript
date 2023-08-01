import type {HuntingRowResult} from './huntingRowResult';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeHuntingRowResult(writer: SerializationWriter, huntingRowResult: HuntingRowResult | undefined = {} as HuntingRowResult) : void {
        writer.writeStringValue("@odata.type", huntingRowResult.odataType);
        writer.writeAdditionalData(huntingRowResult.additionalData);
}
