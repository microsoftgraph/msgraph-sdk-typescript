import { type HuntingRowResult } from './huntingRowResult';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeHuntingRowResult(writer: SerializationWriter, huntingRowResult: HuntingRowResult | undefined = {} as HuntingRowResult) : void {
        writer.writeStringValue("@odata.type", huntingRowResult.odataType);
        writer.writeAdditionalData(huntingRowResult.additionalData);
}
