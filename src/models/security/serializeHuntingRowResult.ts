import {HuntingRowResult} from './huntingRowResult';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeHuntingRowResult(huntingRowResult: HuntingRowResult | undefined = {} as HuntingRowResult, writer: SerializationWriter) : void {
        writer.writeStringValue("@odata.type", huntingRowResult.odataType);
        writer.writeAdditionalData(huntingRowResult.additionalData);
}
