import {IncompleteData} from './incompleteData';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIncompleteData(writer: SerializationWriter, incompleteData: IncompleteData | undefined = {} as IncompleteData) : void {
        writer.writeDateValue("missingDataBeforeDateTime", incompleteData.missingDataBeforeDateTime);
        writer.writeStringValue("@odata.type", incompleteData.odataType);
        writer.writeBooleanValue("wasThrottled", incompleteData.wasThrottled);
        writer.writeAdditionalData(incompleteData.additionalData);
}
